import React, { useState,useEffect } from "react";
import Header from '../Component/Header';
import callAPI from "../service/callAPI";

function Code() {
    const [profile, setProfile] = useState(null);
    useEffect(()=>{
        console.log = console.warn = console.error = () => {};
    },[]);
    async function submitDataProfile(e) {
        e.preventDefault();
        const token1 = e.target.elements['token-1'].value;
        const token2 = e.target.elements['token-2'].value;

        try {
            const profileGitHub = await callAPI(token1, token2);
            setProfile(profileGitHub);
        } catch (error) {
            console.error('Error fetching profile data:', error);
        }
    }

    return (
        <>
            <Header data="Code/" />
            <div className="max-w-3xl mx-auto mt-8 p-4">
                <form onSubmit={submitDataProfile} className="flex items-center">
                    <input
                        type="text"
                        id="token-1"
                        required
                        placeholder="Enter Token 1"
                        className="border-2 border-pink-500 p-2 mr-2 focus:outline-none"
                    />
                    <input
                        type="text"
                        id="token-2"
                        required
                        placeholder="Enter Token 2"
                        className="border-2 border-pink-500 p-2 mr-2 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 focus:outline-none"
                    >
                        Submit
                    </button>
                </form>
                {profile && (
                    <div className="mt-4">
                        <p className="text-lg font-bold mb-2">{profile.entry.tags}</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default Code;
