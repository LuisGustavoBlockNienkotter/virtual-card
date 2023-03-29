import React from "react";
import axios from "axios";

export default function Generate() {
    const client = axios.create({
        baseURL: "http://localhost/api"
    });

    const [state, setState] = React.useState({
        name: "",
        linkedinUrl: "",
        githubUrl: "",
    })

    const handleChange = event => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    }

    const createQrCode = async (name, linkedinUrl, githubUrl) => {
        await client.post('/create-qr-code', {
            name: name,
            linkedinUrl: linkedinUrl,
            githubUrl: githubUrl,
        }).then((response) => { });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createQrCode(state.name, state.linkedinUrl, state.githubUrl)
    };

    return (
        <div id="generate-page">
            <header>
                <h2> QR Code Image Generator </h2>
            </header>
            <section id="qr-code-infos">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            onChange={handleChange}
                            value={state.name}
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            id="linkedinUrl"
                            name="linkedinUrl"
                            placeholder="Linkedin URL"
                            onChange={handleChange}
                            value={state.linkedinUrl}
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            id="githubUrl"
                            name="githubUrl"
                            placeholder="Github URL"
                            onChange={handleChange}
                            value={state.githubUrl}
                        />
                    </div>

                    <button type="submit">Generate Image</button>
                </form>

            </section>
        </div>
    );
}