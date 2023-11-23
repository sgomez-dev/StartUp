import React from 'react';
import '../App.css';

const Skills = () => {
    return (
        <section id="skills" class="card">
        <div class="section-content">
            <img src="../img/skills.png" alt="skills" class="section-image"/>
            <div class="text-content">
                <h2>Skills</h2>
                <table class="knowledge-table">
                    <thead>
                        <tr>
                            <th>Skill</th>
                            <th>No Knowledge</th>
                            <th>Basic</th>
                            <th>Intermediate</th>
                            <th>Advanced</th>
                            <th>Superior</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>HTML</td>
                            <td></td>
                            <td></td>
                            <td>🟡</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>CSS3</td>
                            <td></td>
                            <td>🟠</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>JavaScript</td>
                            <td></td>
                            <td></td>
                            <td>🟡</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Java</td>
                            <td></td>
                            <td></td>
                            <td>🟡</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Python</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>🟢</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>C#</td>
                            <td></td>
                            <td>🟠</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>React</td>
                            <td></td>
                            <td></td>
                            <td>🟡</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    );
}

export default Skills;
