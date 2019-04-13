$(document).ready(function () {
    $.ajax({
        url: "data/",
        method: "GET",
        dataType: "json",
        success: function (data) {
            console.log(data.data.male_data)
             $('#male').DataTable({
                data:data.data.male_data,
                 columns: [
                     { data: 'OBJECTID',title:"OBJECTID"  },
                     { data: 'Age_Bracket' ,title:"Age_Bracket"},
                    { data: 'No_Education',title:"No_Education" },
                    { data: 'Primary' ,title:"Primary" },
                    { data: 'Secondary' ,title:"Secondary" },
                    { data: 'Tertiary',title:"Tertiary"  },
                 ]
        });

    $('#female').DataTable({
                    data:data.data.female_data,
                     columns: [
                         { data: 'OBJECTID',title:"OBJECTID"},
                         { data: 'Age_Bracket' ,title:"Age_Bracket"},
                         { data: 'No_Education',title:"No_Education" },
                         { data: 'Primary' ,title:"Primary" },
                         { data: 'Secondary' ,title:"Secondary" },
                         { data: 'Tertiary',title:"Tertiary"  }
                     ]
            });

            },
        error: function (error) {
            console.log("failed", error)
        }
    })
});