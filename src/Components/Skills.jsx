import { ReactComponent as CSharpLogo } from '../Media/logos/C_Sharp_Logo_2023_cropped.svg'
import { ReactComponent as JavaScriptLogo } from "../Media/logos/Javascript-shield.svg"
import { ReactComponent as SQLServerLogo } from "../Media/logos/Microsoft_SQL_Server_2025_icon.svg"
import { ReactComponent as GitHubLogo} from "../Media/logos/GitHub/GitHub_Invertocat_White.svg"
import Html5Logo from "../Media/logos/HTML5_logo_and_wordmark_white.svg"
import { ReactComponent as CssLogo} from "../Media/logos/cssLogo"
function Skills() {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul className="logos">
                <li>
                    <CSharpLogo className="Logo-img" />
                    <ul className="skill-list">
                        <li>OOP</li>
                        <li>ASP.NET</li>
                        <li>Entity Framework</li>
                        <li>Web API</li>
                        <li>AutoMapper</li>
                        <li>Swagger/Postman</li>
                        <li>JWT</li>
                    </ul>
                </li>
                <li>
                    <SQLServerLogo className="Logo-img"/>
                    <ul className="skill-list">
                        <li>SQL Server</li>
                        <li>SQL Server Management Studio</li>
                        <li>DDL/DML</li>
                        <li>Subqueries</li>
                        <li>Stored Procedures</li>
                        <li>Transactions</li>
                    </ul>
                </li>
                <li>
                    <img className="Logo-img" src={Html5Logo} alt="" />
                    <ul className="skill-list">
                        <li>Create a SPA</li>
                        <li>Semantic HTML</li>
                        <li>WCAG</li>
                    </ul>
                </li>
                <li>
                    <CssLogo/>
                    <ul className="skill-list">
                        <li>CSS styling</li>
                        <li>Animation</li>
                        <li>CSS Pseudo-classNamees</li>
                        <li>Flex / Grid</li>
                    </ul>
                </li>
                <li>
                    <JavaScriptLogo className="Logo-img" />
                    <ul className="skill-list">
                        <li>Fetch</li>
                        <li>JavaScript DOM</li>
                        <li>Event listeners</li>
                        <li>React</li>
                    </ul>
                </li>
                <li>
                    <GitHubLogo className="Logo-img" />
                    <ul className="skill-list">
                        <li>Git and GitHub Repositories</li>
                        <li>Git CLI</li>
                        <li>Pages</li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}
export default Skills;