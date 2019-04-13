from django.test import TestCase

from rest_framework import status
from rest_framework.reverse import reverse

# Create your tests here.
class TestLoadData(TestCase):
    def setUp(self):
        self.backend = reverse("data")

    def test_data_loads(self):
        response = self.client.get(
            self.backend,
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)