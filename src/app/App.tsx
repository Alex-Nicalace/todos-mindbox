import { Providers } from 'app/providers';
import { TodosPage } from 'pages/todosPage';

import './styles/index.scss';

function App() {
  return (
    <Providers>
      <div className="app light">
        <TodosPage />
      </div>
    </Providers>
  );
}

export default App;
