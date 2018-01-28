import React, { Component } from 'react';
import Header from './components/Header';
import Message from './components/Message';
import CartContainer from './containers/CartContainer';
import Footer from './components/Footer';
import ProductContainer from './containers/ProductContainer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <ProductContainer />
                        <Message />
                        <CartContainer />  
                    </div>
                </main >
                <Footer />
            </div >
        );
    }
}

export default App;
