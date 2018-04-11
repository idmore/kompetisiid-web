import React, { Component } from 'react'
import Footer from '../../components/4.2/Footer'
import Header from '../../components/4.2/Header'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { queryToObj } from 'string-manager'

class LayoutHome extends Component 
{
    constructor(props)
    {
        super(props)
        this.state = {
            q: this.props.location.search ? (queryToObj(this.props.location.search.replace('?',''))).q : ''
        }
    }

    componentDidMount()
    {
        const q = this.props.location.search ? (queryToObj(this.props.location.search.replace('?',''))).q : ''
        if(q) this.setState({q})        
    }

    render()
    {
        const { q } = this.state
        return <div>
            <Header 
                q= { q } 
                setState={( obj ) => this.setState( obj )}
                />
            { renderRoutes(this.props.route.routes) }
            <Footer />
            <div id='fullalert' />
        </div>
    }
}

export default LayoutHome
