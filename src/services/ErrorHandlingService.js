export const fetchWithNetworkErrorHandling = async (url, options, timeout = 5000) => {
  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    let data;
    try {
      data = await response.json();
    } catch (error) {
      throw new Error('Erro de sintaxe JSON na resposta.');
    }

    return data;
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Erro de tempo limite. A solicitação demorou muito.');
    } else if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
      throw new Error('Erro de rede. Por favor, verifique sua conexão.');
    } else {
      throw error;
    }
  }
};
