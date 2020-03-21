import { API_URL } from '../config';

export const requestAirdrop = ({email, playerName}) => {
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/airdrop`, {
            method: 'POST',
            body: JSON.stringify({email, playerName})
        })
        .then(response => response.json())
        .then(response => resolve(response))
        .catch(err => reject(err));
    });
};