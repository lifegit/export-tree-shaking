import React from 'react';
import { Avatar } from 'antd';

const App: React.FC = () => {
  return (
    <>
      <div>
        <Avatar src="https://joeschmoe.io/api/v1/random" />
      </div>

      <div>
        <Avatar.Group>
          <Avatar style={{ backgroundColor: '#f56a00' }}>A</Avatar>
          <Avatar style={{ backgroundColor: '#f56a00' }}>B</Avatar>
        </Avatar.Group>
      </div>
    </>
  );
};

export default App;
