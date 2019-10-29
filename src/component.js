 import React from 'react';
//var React = require('react');

class ProductCategoryRow extends React.Component {
    render() {
      const category = this.props.category;
      return (
        React.createElement("tr", null,
        React.createElement("th", { colSpan: "2" },
        category)));
  
  
  
    }}
  
  
  class ProductRow extends React.Component {
    render() {
      const product = this.props.product;
      const name = product.stocked ?
      product.name :
      React.createElement("span", { style: { color: 'red' } },
      product.name);
  
  
      return (
        React.createElement("tr", null,
        React.createElement("td", null, name),
        React.createElement("td", null, product.price)));
  
  
    }}
  
  
  class ProductTable extends React.Component {
    render() {
      const rows = [];
      let lastCategory = null;
  
      this.props.products.forEach(product => {
        if (product.category !== lastCategory) {
          rows.push(
          React.createElement(ProductCategoryRow, {
            category: product.category,
            key: product.category }));
  
        }
        rows.push(
        React.createElement(ProductRow, {
          product: product,
          key: product.name }));
  
        lastCategory = product.category;
      });
  
      return (
        React.createElement("table", null,
        React.createElement("thead", null,
        React.createElement("tr", null,
        React.createElement("th", null, "Name"),
        React.createElement("th", null, "Price"))),
  
  
        React.createElement("tbody", null, rows)));
  
  
    }}
  
  
  class SearchBar extends React.Component {
    render() {
      return (
        React.createElement("form", null,
        React.createElement("input", { type: "text", placeholder: "Search..." }),
        React.createElement("p", null,
        React.createElement("input", { type: "checkbox" }),
        ' ', "Only show products in stock")));
  
  
  
  
    }}
  
  
  class FilterableProductTable extends React.Component {
    render() {
      return (
        React.createElement("div", null,
        React.createElement(SearchBar, null),
        React.createElement(ProductTable, { products: this.props.products })));
  
  
    }}
  
  
  
  const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }];

export default class Component extends React.Component{
    render(){
        return <h1>
            <FilterableProductTable/>
        </h1>
    }
}

