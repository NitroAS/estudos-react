import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './services/redux/store/index';
import '@testing-library/jest-dom/extend-expect'; // Importa matchers adicionais, como toBeInTheDocument

// eslint-disable-next-line no-undef
test('renders AppRoutes component correctly', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  // Aqui você pode testar elementos presentes em suas rotas. Como exemplo, vou testar por algo que o AppRoutes renderize:
  const routeElement = screen.getByText(/learn react/i); // Altere para algum texto relevante que exista nas rotas
  // eslint-disable-next-line no-undef
  expect(routeElement).toBeInTheDocument();
});
