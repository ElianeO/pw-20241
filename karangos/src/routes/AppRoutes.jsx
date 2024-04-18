import React from "react";
import { Routes, Route } from 'react-router-dom'

import CarForm from '../pages/car/CarForm'
import CarList from '../pages/car/CarList'

import CustomerForm from '../pages/customer/CustomerForm';
import CustomerList from '../pages/customer/CustomerList'

import Homepage from "../pages/HomePage"

export default function AppRoutes() {
    return <Routes>
        <Route path="/" element={ <Homepage /> } />

        <Route path="/cars" element={ <CarList/> } />
        <Route path="/cars/new" element={ <CarForm/> } />

        <Route path="/customers" element={ <CustomerList/> } />
        <Route path="/customers/new" element={ <CustomerForm/> } />
        
    </Routes>
}