import { API_URL } from '../config';

export const requestAirdrop = ({email, playerName, recaptchaToken}) => {
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/airdrop`, {
            method: 'POST',
            body: JSON.stringify({email, playerName, recaptchaToken})
        })
        .then(response => response.json())
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
};

export const verifyEmail = ({emailToken, playerName}) => {
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/airdrop/verifyemail`, {
            method: 'POST',
            body: JSON.stringify({emailToken, playerName})
        })
        .then(response => response.json())
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
};