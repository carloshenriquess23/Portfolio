import './index.scss';
import CardProjeto from '../../components/cardProjeto';
import CardConhecimento from '../../components/cardConhecimento';
import CardCurso from '../../components/cardCurso';

export default function Home(){


    return(

        <div className='page'>

            <header className='cabecalho-page'>

                <div className='container-header'>

                    <div className='container-foto'>
                        <img src='/assets/images/rosto.jpg '/>
                    </div>

                    <div className='container-header-mobile'>

                        <div className='container-apresentacao'>

                            <h1>Carlos Henrique dos Santos Silva - 17 anos</h1>

                            <p>Sou um estudante do ensino médio e procuro meu primeiro emprego na área de programação </p>
                        </div>

                        <div className='container-contatos'>

                            <div className='titulo'>

                                <h4>Contatos</h4>
                                <svg width="20" height="25" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 12.6111C11.5155 12.6111 12.969 11.9526 14.0406 10.7805C15.1122 9.60843 15.7143 8.01872 15.7143 6.36111C15.7143 4.70351 15.1122 3.1138 14.0406 1.9417C12.969 0.769595 11.5155 0.111115 10 0.111115C8.48448 0.111115 7.03103 0.769595 5.95939 1.9417C4.88775 3.1138 4.28571 4.70351 4.28571 6.36111C4.28571 8.01872 4.88775 9.60843 5.95939 10.7805C7.03103 11.9526 8.48448 12.6111 10 12.6111ZM7.95982 14.9549C3.5625 14.9549 0 18.8513 0 23.6609C0 24.4617 0.59375 25.1111 1.32589 25.1111H18.6741C19.4062 25.1111 20 24.4617 20 23.6609C20 18.8513 16.4375 14.9549 12.0402 14.9549H7.95982Z" fill="white"/>
                                </svg>
                            </div>

                            <hr/>

                            <a className='github'>

                                <svg width="27" height="28" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="1" width="25" height="24" rx="12" fill="white"/>
                                    <path d="M8.36189 20.1805C8.36189 20.282 8.24597 20.3633 8.0998 20.3633C7.93347 20.3785 7.81754 20.2973 7.81754 20.1805C7.81754 20.0789 7.93347 19.9977 8.07964 19.9977C8.23085 19.9824 8.36189 20.0637 8.36189 20.1805ZM6.79435 19.952C6.75907 20.0535 6.85988 20.1703 7.01109 20.2008C7.14214 20.2516 7.29335 20.2008 7.32359 20.0992C7.35383 19.9977 7.25806 19.8809 7.10685 19.8352C6.97581 19.7996 6.82964 19.8504 6.79435 19.952ZM9.02218 19.8656C8.87601 19.9012 8.7752 19.9977 8.79032 20.1145C8.80544 20.216 8.93649 20.282 9.0877 20.2465C9.23387 20.2109 9.33468 20.1145 9.31956 20.0129C9.30443 19.9164 9.16835 19.8504 9.02218 19.8656ZM12.3387 0.40625C5.34778 0.40625 0 5.75352 0 12.7969C0 18.4285 3.51815 23.2477 8.54335 24.9437C9.18851 25.0605 9.41532 24.6594 9.41532 24.3293C9.41532 24.0145 9.4002 22.2777 9.4002 21.2113C9.4002 21.2113 5.87198 21.973 5.13105 19.698C5.13105 19.698 4.55645 18.2203 3.72984 17.8395C3.72984 17.8395 2.5756 17.0422 3.81048 17.0574C3.81048 17.0574 5.06552 17.159 5.75605 18.3676C6.85988 20.3277 8.70968 19.7641 9.43044 19.4289C9.54637 18.6164 9.87399 18.0527 10.2369 17.7176C7.41935 17.4027 4.57661 16.9914 4.57661 12.1062C4.57661 10.7098 4.95968 10.009 5.76613 9.11523C5.63508 8.78516 5.20665 7.42422 5.89718 5.66719C6.9506 5.33711 9.375 7.03828 9.375 7.03828C10.3831 6.75391 11.4667 6.60664 12.5403 6.60664C13.6139 6.60664 14.6976 6.75391 15.7056 7.03828C15.7056 7.03828 18.13 5.33203 19.1835 5.66719C19.874 7.4293 19.4456 8.78516 19.3145 9.11523C20.121 10.0141 20.6149 10.7148 20.6149 12.1062C20.6149 17.0066 17.6462 17.3977 14.8286 17.7176C15.2923 18.1187 15.6855 18.8805 15.6855 20.0738C15.6855 21.7852 15.6704 23.9027 15.6704 24.3191C15.6704 24.6492 15.9022 25.0504 16.5423 24.9336C21.5827 23.2477 25 18.4285 25 12.7969C25 5.75352 19.3296 0.40625 12.3387 0.40625ZM4.89919 17.9207C4.83367 17.9715 4.84879 18.0883 4.93448 18.1848C5.01512 18.266 5.13105 18.3016 5.19657 18.2355C5.2621 18.1848 5.24698 18.068 5.16129 17.9715C5.08065 17.8902 4.96472 17.8547 4.89919 17.9207ZM4.35484 17.5094C4.31956 17.5754 4.36996 17.6566 4.47077 17.7074C4.55141 17.7582 4.65222 17.743 4.6875 17.6719C4.72278 17.6059 4.67238 17.5246 4.57157 17.4738C4.47077 17.4434 4.39012 17.4586 4.35484 17.5094ZM5.9879 19.3172C5.90726 19.3832 5.9375 19.5355 6.05343 19.632C6.16935 19.7488 6.31552 19.7641 6.38105 19.6828C6.44657 19.6168 6.41633 19.4645 6.31552 19.368C6.20464 19.2512 6.05343 19.2359 5.9879 19.3172ZM5.41331 18.5707C5.33266 18.6215 5.33266 18.7535 5.41331 18.8703C5.49395 18.9871 5.63004 19.0379 5.69556 18.9871C5.77621 18.9211 5.77621 18.7891 5.69556 18.6723C5.625 18.5555 5.49395 18.5047 5.41331 18.5707Z" fill="black"/>
                                </svg>

                                <span>Github</span>
                            </a>

                            <a className='linkedin'>

                                <svg width="24" height="28" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="2" width="26" height="26" rx="5" fill="white"/>
                                    <path d="M24.1429 1.875H1.85134C0.829911 1.875 0 2.72461 0 3.76758V26.2324C0 27.2754 0.829911 28.125 1.85134 28.125H24.1429C25.1643 28.125 26 27.2754 26 26.2324V3.76758C26 2.72461 25.1643 1.875 24.1429 1.875ZM7.85804 24.375H4.00446V11.8477H7.86384V24.375H7.85804ZM5.93125 10.1367C4.69509 10.1367 3.69687 9.12305 3.69687 7.88086C3.69687 6.63867 4.69509 5.625 5.93125 5.625C7.16161 5.625 8.16562 6.63867 8.16562 7.88086C8.16562 9.12891 7.16741 10.1367 5.93125 10.1367ZM22.3031 24.375H18.4496V18.2812C18.4496 16.8281 18.4205 14.959 16.4473 14.959C14.4393 14.959 14.1317 16.541 14.1317 18.1758V24.375H10.2781V11.8477H13.975V13.5586H14.0272C14.5437 12.5742 15.8031 11.5371 17.6777 11.5371C21.5777 11.5371 22.3031 14.1328 22.3031 17.5078V24.375Z" fill="#4E96EB"/>
                                </svg>

                                <span>Linkedin</span>
                            </a>
                        </div>
                    </div>
                </div>

                <img src='/assets/images/header-decoration.png' alt=''/>
            </header>

            <main className='conteudo'>

                <div className='container-projetos'>

                    <section className='projetos'>

                        <header className='header-projetos'>
                            
                            <div className='container-titulo'>

                                <h3>Todos os projetos:</h3>
                                <p>Clique na seta do projeto para saber mais sobre</p>
                            </div>

                            <div className='filtro'>
                                <p>Filtrar</p>
                                <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.182589 1.25615C0.492 0.488199 1.14833 0 1.87497 0H22.1273C22.854 0 23.5103 0.488199 23.8197 1.25615C24.1291 2.0241 24.0354 2.92919 23.576 3.58744L15.0015 15.8473V22.8192C15.0015 23.4829 14.6827 24.0918 14.1717 24.388C13.6607 24.6842 13.056 24.6239 12.6012 24.2234L9.60088 21.5904C9.22115 21.2613 9.00081 20.7402 9.00081 20.1862V15.8473L0.421679 3.58195C-0.0330614 2.92919 -0.13151 2.01862 0.182589 1.25615Z" fill="#79735E"/>
                                </svg>

                                <select>

                                    <option>javascript</option>
                                    <option>ReactJS</option>
                                    <option>HTML</option>
                                    <option>CSS</option>
                                    <option>MYSQL</option>
                                </select>
                            </div>
                        </header>

                        <hr/>

                        <div className='container-listagem-projetos'>

                            <CardProjeto    link="exemploprojeto.com" 
                                            conhecimento1="/assets/images/conhecimentos/js.png"
                                            conhecimento2="/assets/images/conhecimentos/react.png"
                                            conhecimento3="/assets/images/conhecimentos/html-5.png"
                                            conhecimento4="/assets/images/conhecimentos/css-3.png"
                                            conhecimento5="/assets/images/conhecimentos/mysql.png"/>
                        </div>
                    </section>
                </div>

                <div className='container-cursos-conhecimentos'>

                    <h3>Linguagens e frameworks:</h3>

                    <section className='conhecimentos'>
                        <CardConhecimento logo='/assets/images/conhecimentos/react.png' nome='ReactJS'/>
                        <CardConhecimento logo='/assets/images/conhecimentos/js.png' nome='javascript'/>
                        <CardConhecimento logo='/assets/images/conhecimentos/html-5.png' nome='HTML'/>
                        <CardConhecimento logo='/assets/images/conhecimentos/css-3.png' nome='CSS'/>
                        <CardConhecimento logo='/assets/images/conhecimentos/mysql.png' nome='MYSQL'/>
                    </section>

                    <h3>Cursos complementares:</h3>
                    
                    <section className='cursos'>

                        <CardCurso  curso="Técnico em Informática - 26 jan. 2024 até 30 nov. 2024" 
                                    status="Concluído"
                                    instituicao=" Instituto Social Nossa Senhora de Fátima"
                                    descricao="O curso técnico em informática destina-se à formação de profissionais qualificados a atuarem em duas grandes áreas: Hardware e Software. Em Hardware, o aluno aprenderá a efetuar a montagem e manutenção de microcomputadores, gerenciar e configurar redes arquiteturais através de um servidor remoto. Em Software, o aluno será capacitado a desenvolver programas computacionais e sistemas web que interagem com banco de dados através de uma linguagem de programação."/>

                        <CardCurso  curso="Programming Foundation #3 - dez. 2023 até out. 2024"
                                    status="Cursando"
                                    instituicao="Plataforma Devmonk"
                                    descricao="Descrição: O curso aborda os elementos fundamentais presentes nas linguagens de programação do paradigma imperativo, objetivando o estudo aprofundado de seus conceitos centrados nos princípios de composição e abstração. Desenvolve as habilidades necessárias para aprender de forma autônoma a aplicação desses conceitos à qualquer linguagem."/>
                    </section>
                </div>
            </main>
        </div>
    );
}
