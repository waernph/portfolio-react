import { ReactComponent as CSharpLogo } from '../Media/logos/C_Sharp_Logo_2023_cropped.svg'
import { ReactComponent as CSS3Logo } from "../Media/logos/CSS3_logo_and_wordmark_white.svg"
import { ReactComponent as HTML5Logo } from "../Media/logos/HTML5_logo_and_wordmark_white.svg"
import { ReactComponent as JavaScriptLogo } from "../Media/logos/Javascript-shield.svg"
import { ReactComponent as SQLServerLogo } from "../Media/logos/Microsoft_SQL_Server_2025_icon.svg"
import { ReactComponent as GitHubLogo} from "../Media/logos/GitHub/GitHub_Invertocat_White.svg"
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
                    {/* <SQLServer className="Logo-img"/> */}
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
                    <HTML5Logo className='Logo-img' />
                    <ul className="skill-list">
                        <li>Create a SPA</li>
                        <li>Semantic HTML</li>
                        <li>WCAG</li>
                    </ul>
                </li>
                <li>
                    {/* <CSS3Logo /> */}
                    <img id="css3-logo" src="resources/media/logos/CSS3_logo_and_wordmark_white.svg" alt="Logo of CSS3" />
                    <ul className="skill-list">
                        <li>CSS styling</li>
                        <li>Animation</li>
                        <li>CSS Pseudo-classNamees</li>
                        <li>Flex / Grid</li>
                    </ul>
                </li>
                <li>
                    {/* <JavaScriptLogo /> */}
                    <img id="js-logo" src="resources/media/logos/Javascript-shield.svg" alt="Logo of JavaScript" />
                    <ul className="skill-list">
                        <li>Fetch</li>
                        <li>JavaScript DOM</li>
                        <li>Event listeners</li>
                        <li>React</li>
                    </ul>
                </li>
                <li>
                    <img id="github-logo" src="resources/media/logos/GitHub/GitHub_Invertocat_White.svg" alt="Logo of GitHub" />
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