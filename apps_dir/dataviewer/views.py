import json
import re

from django.conf import settings
from django.shortcuts import render

import pandas as pd
from rest_framework.response import Response
from rest_framework.views import APIView
from structlog import get_logger


class Home(APIView):
    def get(self, request):
        return render(request, "index.html")


class MyData(APIView):

    def get(self, request):
        logger = get_logger(__name__)

        # read data from file into a pandas dataframe
        df = pd.read_csv(f'{settings.BASE_DIR}/apps_dir/dataviewer/Population.csv')

        # divide the data into male and female dataframes
        male = df.loc[:, ['OBJECTID', 'Age_Bracket', 'No_Education_-_Male', 'Primary__-_Male', 'Secondary__-_Male',
                          'Tertiary_-_Male']]
        female = df.loc[:,
                 ['OBJECTID', 'Age_Bracket', 'No_Education_-_Female', 'Primary_-_Female', 'Secondary_-_Female',
                  'Tertiary_-_Female']]

        # give columns  better names without - and _ and removing Male/female collunmname sufix
        male.rename(columns=lambda x: re.sub(r'(?:_)*-_(Male)', '', x), inplace=True)
        female.rename(columns=lambda x: re.sub(r'(?:_)*-_(Female)', '', x), inplace=True)

        # convert data to json and reorient the structure
        object ={
              "male_data": json.loads(male.to_json(orient='records')),
             "female_data": json.loads(female.to_json(orient='records'))
        }
        #log and return the data as a json response
        logger.info("data read successfully")
        return Response({
            "status": "Test success",
            "data": object

        })

