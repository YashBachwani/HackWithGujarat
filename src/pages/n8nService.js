export const sendContactMessage = async ({ name, email, message }) => {
    try {
      const response = await fetch('https://jeetpitale.app.n8n.cloud/webhook/2f23487d-1108-4f72-980e-54200d08b1bd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add auth if needed (e.g., Authorization: 'Bearer <token>')
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (!response.ok) throw new Error('Failed to send message');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error sending contact message:', error);
      throw error;
    }
  };