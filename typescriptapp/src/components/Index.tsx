// @ts-ignore
import css from './CssModule.module.css'
// @ts-ignore
import Weatherlviv from "./WeatherLviv.tsx";
// @ts-ignore
import WeatherFunchal from "./WeatherFunchal.tsx";
function Main (props:any):any {
    return (
        <div className={css.Item}>
            <Weatherlviv/>
            <WeatherFunchal/>
            </div>
    )
}
export default Main

