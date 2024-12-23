import React from "react";

function characterAdditionalInfo() {
    const additional = {
        description: "A person within the Star Wars universe",
        _id: "5f63a36eee9fd7000499be42",
        uid: "1",
        __v: 0
    }
    return (
        <div className="container border p-3">
            <div className="row">
                <div className="col-6">
                    <p className="info--font_footer">Description:{additional.description}</p>
                </div>
                <div className="col-6">
                    <p className="info--font_footer">Id:{additional._id}</p>
                </div>
                <div className="col-6">
                    <p className="info--font_footer">Additional id:{additional.uid}</p>
                </div>
                <div className="col-6 ">
                    <p className="info--font_footer">Version:{additional.__v}</p>
                </div>
            </div>


        </div>
    )

}

export default characterAdditionalInfo