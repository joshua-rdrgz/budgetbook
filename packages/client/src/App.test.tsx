import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeAll(() => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => await Promise.resolve({ message: 'World!' }),
    });
  });

  afterAll(() => {
    vi.resetAllMocks();
  });

  test('should have hello world', async () => {
    render(<App />);
    await waitFor(() => {
      const message = screen.queryByText(/Hello, World!/i);
      expect(message).toBeVisible();
    });
  });
});
