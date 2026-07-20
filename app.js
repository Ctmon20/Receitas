const URL_API_RECEITAS = "https://script.google.com/macros/s/AKfycbzW_vFC5PKepD59kYy_6XbdbjNl3B_b2xtbRKfwinqi1pmfysDYFtJCevLkUr3JyJShXg/exec";

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