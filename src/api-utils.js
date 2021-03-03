import request from "superagent";

// This localhost has to be different from the front end localhost port. Also, spin up back end server before front end.  React will figure out the port conflic
const URL = 'http://localhost:3000';


// POST
export async function signupUser(email, password) {
    const response = await request
        .post(`${URL}/auth/signup`)
        .send({
            email: email,
            password: password,
        })

    return response.body;
}

export async function loginUser(email, password) {
    const response = await request
        .post(`${URL}/auth/signin`)
        .send({
            email: email,
            password: password,
        })

    return response.body;
}

