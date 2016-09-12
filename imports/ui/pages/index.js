import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export const Index = () => (
  <Jumbotron className="text-center">
      <h4>TODOS:</h4>
      <ul>
          <li>Match Types</li>
          <li>Match Schema</li>
          <li>Season Heirarchy</li>
          <li>Cleanup team ui and addX dialogs (after refactoring screwup)</li>
          <li>Create true match heirarchy</li>
          <li>Work out how to handle metadata</li>
          <li>Switch admin to use onclick editing</li>
      </ul>
  </Jumbotron>
);
