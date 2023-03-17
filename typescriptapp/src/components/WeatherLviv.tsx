// @ts-ignore
import css from './CssModule.module.css'
function WeatherLviv(props:any) : any {
    interface weather{
        temperature : number
        description: string[]
    }
    return (
        <div className={css.Weather}>

        </div>
    )
}
export default WeatherLviv