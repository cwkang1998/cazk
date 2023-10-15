const API_URL = 'http://localhost:8080';

export const requestProof = async (identifier: string) => {
  const result = await fetch(`${API_URL}/generate`, {
    method: 'POST',
    body: JSON.stringify({
      identifier,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (result.ok) {
    console.log(result.json());
  } else {
    alert('error');
  }
};

export const validateProof = async (proof: any) => {
  const result = await fetch(`${API_URL}/verify`, {
    method: 'POST',
    body: JSON.stringify(proof),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (result.ok) {
    console.log(result.json());
  } else {
    alert('error');
  }
};
