const API_BASE = "http://localhost:8080";

export const getData = async (endpoint) => {
  const res = await fetch(`${API_BASE}${endpoint}`);
  if (!res.ok) throw new Error(`GET error: ${res.statusText}`);
  return res.json();
};

export const postData = async (endpoint, data) => {
  const isFormData = data instanceof FormData;

  const response = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    headers: isFormData
      ? undefined
      : { "Content-Type": "application/json" },
    body: isFormData ? data : JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Error al hacer POST: ${response.statusText}`);
  }

  return await response.json();
};

export const putData = async (endpoint, data) => {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Error al hacer PUT: ${response.statusText}`);
  }

  return await response.text();
};


export const deleteData = async (endpoint) => {
  const res = await fetch(`${API_BASE}${endpoint}`, { method: "DELETE" });
  if (!res.ok) throw new Error(`DELETE error: ${res.statusText}`);
  return true;
};