$(document).ready(function () {

    $.ajax({
        url: "data/",
        method: "GET",
        dataType: "json",
        success: function (data) {
            console.log(data)
            maleData = data.data.male
            femaleData = data.data.female
            console.log("success", maleData)
            console.log("success", femaleData)

            $('#male').DataTable({
                data: maleData,

                columns: [
                    {label: 'Age_Bracket',data:maleData.Age_Bracket},
                    // {label: 'No_Education_-_Male',data:maleData.No_Education_-_Male},
                    // {label: 'Primary__-_Male',data:maleData.No_Education_-_Male},
                    // {label: 'Secondary__-_Male',data:maleData.Secondary__-_Male}
                ]

            });


        },
        error: function (error) {
            console.log("failed", error)
        }
    })
});