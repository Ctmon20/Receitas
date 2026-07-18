const URL_API_RECEITAS = "https://script.google.com/macros/s/AKfycbzTGZl8Wxpeq57X7-I901Ggt4QsK0HOCS0I6R9wZa2VBiwcbBZToVqQf6OrNpyo591XQg/exec";

const db = {
    call: async (payload) => {
        try {
            const response = await fetch(URL_API_RECEITAS, {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify(payload)
            });
            return await response.json();
        } catch (error) {
            console.error("Erro na API:", error);
            return null;
        }
    }
};