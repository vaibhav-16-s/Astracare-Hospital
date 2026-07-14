const mongoose = require("mongoose");

const shiftSchema = new mongoose.Schema({

    empId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
    },

    empModel:{
    type:String,
    required:true,
    enum:[
        "Doctor",
        "Staff"
    ]
},

    empRole:{
        type:String,
        enum:[
            "Doctor",
            "Receptionist",
            "Nurse",
            "Lab Technician"
        ],
        required:true
    },

    weekStart:{
        type:Date,
        required:true
    },

    schedule:[
        {
            day:{
                type:String,
                required:true
            },

            startTime:{
                type:String
            },

            endTime:{
                type:String
            },

            status:{
                type:String,
                enum:[
                    "Scheduled",
                    "Off",
                    "Leave"
                ],
                default:"Scheduled"
            }
        }
    ]

},
{
    timestamps:true
});


module.exports = mongoose.model("shift", shiftSchema);