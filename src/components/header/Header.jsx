import React from 'react';
import characterAdditionalInfo from "../footer/footer";

function Header() {
    const lukeSkywalker = {
        height: 172,
        mass: 77,
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: 1980,
        gender: "male",
        created: "now",
        edited: "2024-12-22T17:21:39.557Z",
        name: "Luke Skywalker",
    }

    return (
        <div className="container border p-3">
            <h1 className="character_name text-center">Name:{lukeSkywalker.name}</h1>
            <div className="row">
                <div className="col-3 character_hair info--font_header">Hair color:<span>{lukeSkywalker.height}</span></div>
                <div className="col-3 character_weight info--font_header">Mass:<span>{lukeSkywalker.mass}</span></div>
                <div className="col-3 character_skin info--font_header">Skin color:<span>{lukeSkywalker.skin_color}</span></div>
                <div className="col-3 character_eye info--font_header">Eye color:<span>{lukeSkywalker.eye_color}</span></div>
                <div className="col-3 character_year info--font_header">Date of Birth:<span>{lukeSkywalker.birth_year}</span></div>
                <div className="col-3 character_gender info--font_header">Gender:<span>{lukeSkywalker.gender}</span></div>
                <div className="col-3 character_creation info--font_header">Created:<span>{lukeSkywalker.created}</span></div>
            </div>
        </div>
    )
}

export default Header;