import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { Cooks } from '../pages/Cooks';
import { Waiters } from '../pages/Waiters';

export const Routes =  () => (
    <Switch>
        <Route exact path="/Cooks" element={<Cooks />} />
        <Route path="/Waiters" element={<Waiters />} />
    </Switch>   
);
