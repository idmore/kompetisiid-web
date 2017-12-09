import React, {PureComponent} from 'react'
import {today} from '../../../helpers/DateTime'

export default class HomeCount extends PureComponent
{
    render()
    {
        if(this.props.data)
        {
            return (
                <div className='col-md-12 home-count'>
                    <div className='container'>
                    <div className='col-sm-3 col-xs-3 home-count-item'> 
                        <div className='home-count-text-large'>{today()}</div>
                        <div className='home-count-text-small text-gray'>Terus berkarya.</div>
                    </div>
                    <div className='col-sm-3 col-xs-3 home-count-item'> 
                        <div className='home-count-text-large'>{this.props.data.totalcompetition}</div>
                        <div className='home-count-text-small text-gray'>Kompetisi Aktif</div>
                    </div>
                    <div className='col-sm-3 col-xs-3 home-count-item'> 
                        <div className='home-count-text-large'>{this.props.data.totalthismounth}</div>
                        <div className='home-count-text-small text-gray'>Deadline Bulan ini</div>
                    </div>
                    <div className='col-sm-3 col-xs-3 home-count-item'> 
                        <div className='home-count-text-large'>{this.props.data.totalprize}</div>
                        <div className='home-count-text-small text-gray'>Nilai Total Hadiah</div>
                    </div>
                    </div>
                </div>
            )
        }
        
        return null
    }
}