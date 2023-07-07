
document.addEventListener('DOMContentLoaded', function () {
  // Seu código JavaScript aqui

  const dataPerfil = [
    {
      imgSrc: './assets/images/felipeGeazi/felipeGeaziCapa.png',
      perfilImgSrc: './assets/images/felipeGeazi/FelipeGeazi.png',
      nome: 'Felipe Geazi',
      profissao: 'Desenvolvedor Back-End',
      descricao: 'Formado em Bacharelado em Design e Licenciatura em Artes Visuais, combino minha paixão por design e arte com minhas habilidades de desenvolvimento para criar soluções web atraentes e funcionais. Recentemente, lidei com diversos projetos usando React no front-end, Node.js e Express no back-end, e Python e Django para acesso a banco de dados.',
      linkedin: 'https://www.linkedin.com/in/felipegeazi/',
      github: 'https://github.com/FelipeGeazi'
    },
    {
      imgSrc: './assets/images/cristianoOliveira/cristianoOliveiraCapa.png',
      perfilImgSrc: './assets/images/cristianoOliveira/cristianoOliveira.png',
      nome: 'Cristiano Oliveira',
      profissao: 'Analytics Engineer',
      descricao: 'Profissional de dados, com atuação em cenários que envolvem o tratamento, manipulação e conhecimento sobre dados em processos de tomada de decisão, aprimorando habilidades como resolução de problemas através do trabalho em equipe em cenários complexos do mercado de dados e tecnologia.',
      linkedin: 'https://www.linkedin.com/in/ccso',
      github: 'https://github.com/CristianoCesar'
    },
    {
      imgSrc: './assets/images/elizeuJunior/elizeuJuniorCapa.png',
      perfilImgSrc: './assets/images/elizeuJunior/elizeuJunior.png',
      nome: 'Elizeu R M Junior',
      profissao: 'Desenvolvedor Front-End',
      descricao: 'Sou apaixonado por tecnologia e tenho um forte interesse em soluções em nuvem, com foco na carreira de Analista de Cloud. Busco constantemente aprimorar meus conhecimentos para me especializar em projetar, implementar e otimizar infraestruturas na nuvem, visando atender às necessidades específicas das empresas.',
      linkedin: 'https://www.linkedin.com/in/elizeu-jr/',
      github: 'https://github.com/ermyjr'
    },
    {
      imgSrc: './assets/images/edmilsonBrito/edmilsonBritoCapa.png',
      perfilImgSrc: './assets/images/edmilsonBrito/edmilsonBrito.png',
      nome: 'Edmilson Brito',
      profissao: 'Analista de Suporte Técnico',
      descricao: 'Atuando como analista de suporte técnico na Uze promotora de Vendas de outubro de 2018 á dezembro de 2022 e desde janeiro de 2023 como Supervisor de Suporte Técnico.',
      linkedin: 'https://www.linkedin.com/in/ed-brito/',
      github: ''
    },

    // Adicione mais objetos para mais containers aqui
  ];


  const dataSidebar = [
    {
      imgSrc: './assets/images/felipeGeazi/felipeGeaziCapa.png',
      perfilImgSrc: './assets/images/felipeGeazi/FelipeGeazi.png',
      nome: 'Felipe Geazi',
      profissao: 'Desenvolvedor Back-End',
      descricao: 'Formado em Bacharelado em Design e Licenciatura em Artes Visuais, combino minha paixão por design e arte com minhas habilidades de desenvolvimento para criar soluções web atraentes e funcionais. Recentemente, lidei com diversos projetos usando React no front-end, Node.js e Express no back-end, e Python e Django para acesso a banco de dados.',
      telefone: ' (21) 99226-9944',
      endereco: 'Rio de Janeiro- RJ',
      email: 'felipegeaziartes@gmail.com',
      instagram: 'https://www.instagram.com/felipegeazicarmo/',
      github: 'https://github.com/FelipeGeazi',
      linkedin: 'https://www.linkedin.com/in/felipegeazi/'
    },
    {
      imgSrc: './assets/images/cristianoOliveira/cristianoOliveiraCapa.png',
      perfilImgSrc: './assets/images/cristianoOliveira/cristianoOliveira.png',
      nome: 'Cristiano Oliveira',
      profissao: 'Analytics Engineer',
      descricao: 'Profissional de dados, com atuação em cenários que envolvem o tratamento, manipulação e conhecimento sobre dados em processos de tomada de decisão, aprimorando habilidades como resolução de problemas através do trabalho em equipe em cenários complexos do mercado de dados e tecnologia.',
      telefone: '(12) 99706-6020',
      endereco: ' Campos do Jordão,SP',
      email: 'cristiano.cesar.oliveira@gmail.com',
      instagram: '',
      github: 'https://github.com/CristianoCesar',
      linkedin: 'https://www.linkedin.com/in/ccso'
    },
    {
      imgSrc: './assets/images/elizeuJunior/elizeuJuniorCapa.png',
      perfilImgSrc: './assets/images/elizeuJunior/elizeuJunior.png',
      nome: 'Elizeu R M Junior',
      profissao: 'Desenvolvedor Front-End',
      descricao: 'Sou apaixonado por tecnologia e tenho um forte interesse em soluções em nuvem, com foco na carreira de Analista de Cloud. Busco constantemente aprimorar meus conhecimentos para me especializar em projetar, implementar e otimizar infraestruturas na nuvem, visando atender às necessidades específicas das empresas.',
      telefone: '(67) 99257-4712',
      endereco: 'Campo Grande - MS',
      email: 'ermyjr94@gmail.com',
      instagram: 'https://www.instagram.com/ermjr/',
      linkedin: 'https://www.linkedin.com/in/elizeu-jr/',
      github: 'https://github.com/ermyjr'
    },
    {
      imgSrc: './assets/images/edmilsonBrito/edmilsonBritoCapa.png',
      perfilImgSrc: './assets/images/edmilsonBrito/edmilsonBrito.png',
      nome: 'Edmilson Brito',
      profissao: 'Analista de Suporte Técnico',
      descricao: 'Atuando como analista de suporte técnico na Uze promotora de Vendas de outubro de 2018 á dezembro de 2022 e desde janeiro de 2023 como Supervisor de Suporte Técnico.',
      telefone: '(71) 99380-6054',
      endereco: 'Salvador, BA',
      email: 'edbrito.3571@gmail.com',
      instagram: '',
      github: '',
      linkedin: 'https://www.linkedin.com/in/ed-brito/'
    }
    // Adicione mais objetos para mais perfis aqui
  ];

  const cvData = [
    {
      experience: [
        {
          position: "Analista De Operações II",
          company: "Ifood",
          date: "Jul 2019 - Jun 2021)"
        },
        {
          position: "Supervisor De Operações",
          company: "Service Food Station",
          date: "Jun 2018- Jul 2019"
        },
        {
          position: " Gerente De Operações",
          company: "Manpower",
          date: "Olimpíadas e Paraolimpíadas Rio-2016"
        }
      ],
      education: [
        {
          degree: " Licenciatura em Artes Visuais",
          institution: "UERJ",
          date: "ABR 13- DEZ 2020."
        },
        {
          degree: "Bacharelado em Design",
          institution: "Unicarioca",
          date: "JUL 2013- DEZ 2019"
        }
      ],
      programmingSkills: [
        {
          name: "HTML",
          percent: 90
        },
        {
          name: "CSS",
          percent: 90
        },
        {
          name: "JavaScript",
          percent: 60
        },
        {
          name: "React",
          percent: 50
        },
        {
          name: "Styled Components",
          percent: 40
        },
        {
          name: "TypeScript",
          percent: 55
        },
        {
          name: "JSON -Server",
          percent: 40
        },
        {
          name: "Next.js",
          percent: 40
        },
        {
          name: "JAVA",
          percent: 40
        },
        {
          name: "SalesForce",
          percent: 40
        },
        {
          name: "PYTHON",
          percent: 40
        },
        {
          name: "APEX",
          percent: 40
        },
        {
          name: "SQLite",
          percent: 40
        },
        {
          name: "DJANGO",
          percent: 40
        },
        {
          name: "Node.Js",
          percent: 40
        },
        {
          name: "PostgreSQL",
          percent: 40
        },
        {
          name: "SQL",
          percent: 40
        },
        {
          name: "Docker",
          percent: 40
        },
        {
          name: "TypeScript",
          percent: 40
        },
        {
          name: "JEST",
          percent: 40
        },
        {
          name: "GIT e GITHUB",
          percent: 40
        },
        {
          name: "MongoDB",
          percent: 40
        },
        {
          name: "Kafka",
          percent: 40
        },
        {
          name: "KSQL",
          percent: 40
        },
        {
          name: "AWS",
          percent: 40
        }
      ],
      certifications: [
        {
          name: "Fundamentos de AWS, Escola da Nuvem – 2023"
        },
        {
          name: "Trilha Back-End: JAVA, ONE - Oracle Next Education - 2023"
        },
        {
          name: "SalesForce: APEX, Aura Components , CAPGEMINI ACADEMY - 2023"
        },
        {
          name: "Big Data Engineer ,  SEMANTIX ACADEMY - 2023"
        },
        {
          name: "Desenvolvimento em Rede Etherium , Gama Academy - 2023"
        }

      ],
      interests: [
        {
          iconClass: "art",
          icon: "fas fa-dumbbell",
          name: "Jujitsu"
        },
        {
          iconClass: "art",
          icon: "fas fa-book",
          name: "Natação"
        },
        {
          iconClass: "movies",
          icon: "fas fa-laptop-code",
          name: "Video Games"
        },
        {
          iconClass: "music",
          icon: "fas fa-bicycle",
          name: "Blockchain"
        },
        {
          iconClass: "games",
          icon: "fas fa-cloud",
          name: "Cloud"
        }
      ],
      pdfPath: "./assets/cvs/FelipeGeaziCV.pdf"
    },
    {
      experience: [
        {
          position: "Analytics Engineer",
          company: "Indicium Tech",
          date: "Jul 2022 - Atual"
        },
        {
          position: "Intern Advanced Analytics",
          company: "Imagem Geosistemas",
          date: "Fev 2022 - Atual"
        }
      ],
      education: [
        {
          degree: "Bacharelado em Ciência de Dados",
          institution: "IFSP",
          date: "Ago 2021 - Jul 2025"
        },
        {
          degree: "Análise e Desenvolvimento de Sistema",
          institution: "Escola da Nuvem",
          date: "Fev 2012 - Dez 2014"
        },
      ],
      programmingSkills: [
        {
          name: "Python",
          percent: 95
        },
        {
          name: "Pandas",
          percent: 95
        },
        {
          name: "Metabase",
          percent: 95
        },
        {
          name: "Modelagem de Dados",
          percent: 95
        },
        {
          name: "dbt",
          percent: 95
        },
        {
          name: "Airflow",
          percent: 95
        },
        {
          name: "Aprendizado de Máquina",
          percent: 95
        },
        {
          name: "Git",
          percent: 95
        },
        {
          name: "ETL",
          percent: 95
        },
        {
          name: "PowerBI",
          percent: 95
        },
        {
          name: "Azure",
          percent: 95
        },
        {
          name: "Cloud",
          percent: 95
        },
        {
          name: "GCP",
          percent: 95
        },
      ],
      certifications: [
        {
          name: "Associate Cloud Enginner, GCP - Jul 2023"
        },
        {
          name: "Apache Airflow, Fundamentals - Jun 2023"
        },
        {
          name: "Databricks Lakehouse, Fundamentals - Abr 2023"
        },
        {
          name: "Azure AI 900, Fundamentals - Fev 2023"
        },
        {
          name: "Azure AZ 900, Fundamentals - Nov 2022"
        },
        {
          name: " Azure DP 900, Fundamentals - Out 2023"
        },
        {
          name: "AWS Fundamentos, Escola da Nuvem - Jul 2023"
        }
      ],
      interests: [
        {
          iconClass: "art",
          icon: "fas fa-laptop-code",
          name: "Tecnologia"
        },
        {
          iconClass: "movies",
          icon: "fas fa-book",
          name: "Serviços Voluntários"
        },
        {
          iconClass: "music",
          icon: "fas fa-language",
          name: "Cloud"
        }
      ],
      pdfPath: "./assets/cvs/suzana.pdf"
    },
    {
      experience: [
        {
          position: "Jovem Aprendiz – Auxiliar de Marcenaria",
          company: "COMERCIAL GOMES: Material de Construção",
          date: "Fev 2018 - Out 2018"
        }
      ],
      education: [
        {
          degree: "Sistemas de Informação",
          institution: "IFMA",
          date: "Jan. 2021 - Agora"
        }
      ],
      programmingSkills: [
        {
          name: "JavaScript",
          percent: 95
        },
        {
          name: "Java",
          percent: 90
        },
        {
          name: "HTML5",
          percent: 60
        },
        {
          name: "CSS3",
          percent: 50
        },
        {
          name: "NodeJS",
          percent: 40
        },
        {
          name: "MySql",
          percent: 55
        },
        {
          name: "Mongo DB",
          percent: 40
        },
        {
          name: "Git e Github",
          percent: 40
        },
        {
          name: "AWS",
          percent: 40
        }
      ],
      certifications: [
        {
          name: "Fundamentos de AWS, Escola da Nuvem – 2023"
        }
      ],
      interests: [
        {
          iconClass: "art",
          icon: "fas fa-laptop-code",
          name: "Tecnologia"
        },
      ],
      pdfPath: "./assets/cvs/MaikeSombraCV.pdf"
    },
    {
      experience: [
        {
          position: "Analista de Suporte N2",
          company: "Locaweb",
          date: "Out 2022 - Agora"
        },
        {
          position: "Analista de Suporte N1",
          company: "Locaweb",
          date: "Jun 2021 - Out 2022"
        },
        {
          position: "Auxiliar de Suporte e HelpDesk II",
          company: "Centro Universitário São Camilo",
          date: "Fev 2021 - Jun 2021"
        },
        {
          position: "Auxiliar de Suporte e HelpDesk I",
          company: "Centro Universitário São Camilo",
          date: "Out 2019 - Jan 2021"
        }
      ],
      education: [
        {
          degree: "Tecnólogo em Gestão da Tecnologia da Informação",
          institution: "Universidade Paulista",
          date: "Jan. 2016 - Dez. 2017"
        }
      ],
      programmingSkills: [
        {
          name: "HTML5",
          percent: 95
        },
        {
          name: "PHP",
          percent: 90
        },
        {
          name: "MySQL",
          percent: 60
        },
        {
          name: "SQL Server",
          percent: 50
        },
        {
          name: "PHPMYAdmin",
          percent: 40
        },
        {
          name: "PostgreSQL",
          percent: 55
        },
        {
          name: "Kibana",
          percent: 40
        },
        {
          name: "Linux",
          percent: 40
        },
        {
          name: "AWS",
          percent: 40
        }
      ],
      certifications: [
        {
          name: "Administração de PostgreSQL com alta performance -/ 4Linux"
        },
        {
          name: "Administração MYSQL com alta performance e alta disponibilidade -/ 4Linux"
        },
        {
          name: "Fundamentos do SAP-/ KaSolution"
        },
        {
          name: "Computação em Nuvem AWS/ - KaSolution"
        },
        {
          name: "Computação em Nuvem AWS/ - Escola da Nuvem"
        }
      ],
      interests: [
        {
          iconClass: "art",
          icon: "fas fa-laptop-code",
          name: "Tecnologia"
        }
      ],
      pdfPath: "./assets/cvs/FelipeSouzaCV.pdf"
    }
  ];


  function createContainerResumeHTML(dataPerfil) {
    return `
        <div class="container-resume">
            <img src="${dataPerfil.imgSrc}"/>
            <div class="perfil">  
                <div class="perfil-borda">
                    <img src="${dataPerfil.perfilImgSrc}" />
                </div>
            </div>
            <h2>${dataPerfil.nome}</h2>
            <h3>${dataPerfil.profissao}</h3>
            <div class="linha"></div>
            <div class="description">
                ${dataPerfil.descricao}
            </div>
            <div class="icons">
                <a href="${dataPerfil.linkedin}" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
                <a href="${dataPerfil.github}" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
            </div>
        </div>
      `;
  }

  // Função para adicionar os elementos container-resume ao elemento main
  function renderContainerResumes() {
    const mainElement = document.querySelector('main');
    mainElement.classList.remove('hidden')
    const backButton = document.querySelector('.backButton');
    backButton.classList.add('hidden');

    let containerResumesHTML = '';

    // Percorre o array de dados e gera o HTML para cada objeto
    for (let i = 0; i < dataPerfil.length; i++) {
      const containerResumeHTML = createContainerResumeHTML(dataPerfil[i]);
      containerResumesHTML += containerResumeHTML;
    }

    // Adiciona o HTML gerado ao elemento main
    mainElement.innerHTML = containerResumesHTML;

    const containerResumes = document.querySelectorAll('.container-resume');

    containerResumes.forEach((container, i) => {
      container.addEventListener('click', () => {
        // Hide the main section
        mainElement.style.display = 'none';

        renderProfiles(dataSidebar, i);
        renderCVSection(cvData, i)
        // Show the next page (container-cv)
        const containerCv = document.querySelector('.container-cv');
        containerCv.classList.remove('hidden');
      });
    });
  }

  // Chama a função para renderizar os elementos container-resume
  renderContainerResumes();

  function createProfileHTML(data) {
    return `
      <div class="perfil-cv">
        <div class="container-resume curriculo">
          <img src="${data.imgSrc}" />
          <div class="perfil">
            <div class="perfil-borda">
              <img src="${data.perfilImgSrc}" />
            </div>
          </div>
          <h2>${data.nome}</h2>
          <h3>${data.profissao}</h3>
          <div class="linha"></div>
          <div class="base">
            <div class="about">
              <h3>Sobre Mim</h3>
              ${data.descricao}
            </div>
            <div class="contact">
              <h3>Contatos</h3>
              <div class="call">
                <a href="tel:${data.telefone}">
                  <i class="fas fa-phone"></i>
                  <span>${data.telefone}</span>
                </a>
              </div>
              <div class="address">
                <a href="https://goo.gl/maps/fiTBGT6Vnhy">
                  <i class="fas fa-map-marker"></i>
                  <span>${data.endereco}</span>
                </a>
              </div>
              <div class="email">
                <a href="mailto:${data.email}">
                  <i class="fas fa-envelope"></i>
                  <span>${data.email}</span>
                </a>
              </div>
            </div>
            <div class="follow">
              <h3>Me Sigam</h3>
              <div class="box">
                <a href="${data.instagram}" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="${data.github}" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
                <a href="${data.linkedin}" target="_blank">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  }

  // Função para renderizar os perfis na página
  function renderProfiles(dataSidebar, clickedIndex) {
    console.log(dataSidebar[clickedIndex])
    const containerCVElement = document.querySelector('.container-cv');

    containerCVElement.innerHTML = ''; // Limpa o conteúdo anterior

    const profileHTML = createProfileHTML(dataSidebar[clickedIndex]);
    containerCVElement.innerHTML += profileHTML;

  }
  // Chame a função renderProfiles passando a lista de dados
  // renderProfiles(dataSidebar);


  function createCVHTML(data) {
    return `
      <div class="cv">
          <div class="func">
              <div class="func-first">
                  <div class="work">
                      <h3><i class="fa fa-briefcase"></i>Experiência</h3>
                      <ul>
                          ${data.experience.map((exp) => `
                            <li><span>${exp.position}</span><small>${exp.company}</small><small>${exp.date}</small></li>
                          `).join('')}
                      </ul>
                  </div>
                  <div class="edu">
                      <h3><i class="fa fa-graduation-cap"></i>Educação</h3>
                      <ul>
                          ${data.education.map((edu) => `
                            <li><span>${edu.degree}</span><small>${edu.institution}</small><small>${edu.date}</small></li>
                          `).join('')}
                      </ul>
                  </div>
              </div>
  
              <div class="skills-prog">
                  <h3><i class="fas fa-code"></i>Habilidades Técnicas</h3>
                  <ul>
                      ${data.programmingSkills.map((skill) => `
                        <li data-percent="${skill.percent}"><span>${skill.name}</span>
                            <div class="skills-bar">
                                <div class="bar"></div>
                            </div>
                        </li>
                      `).join('')}
                  </ul>
              </div>
  
              <div class="skills-soft">
                  <h3><i class="fas fa-bezier-curve"></i>Cursos e Certificações</h3>
                  <ul>
                      ${data.certifications.map((cert) => `
                        <li><span>${cert.name}</span></li>
                      `).join('')}
                  </ul>
              </div>
  
              <div class="interests">
                  <h3><i class="fas fa-star"></i>Interesses</h3>
                  <div class="interests-items">
                      ${data.interests.map((interest) => `
                        <div class="${interest.iconClass}"><i class="${interest.icon}"></i><span>${interest.name}</span></div>
                      `).join('')}
                  </div>
              </div>
          </div>
  
          <div class="download-button">
              <a href=${data.pdfPath} download>
                <button class="btn-download">Download CV</button>
              </a>
          </div>
      </div>
    `;
  }

  // Função para renderizar a seção "CV" na página
  function renderCVSection(data, clickedIndex) {
    const backButton = document.querySelector('.backButton');
    backButton.classList.remove('hidden');

    const containerCVElement = document.querySelector('.container-cv');

    const cvHTML = createCVHTML(data[clickedIndex]);
    containerCVElement.innerHTML += cvHTML;
  }

  // Chame a função renderCVSection passando os dados do objeto do CV
  // renderCVSection(cvData);

  function goToMainPage() {

    const containerCv = document.querySelector('.container-cv');
    containerCv.classList.add('hidden');

    window.location.reload();

  }

  // Evento de clique do botão
  const backButton = document.getElementById('backButton');
  backButton.addEventListener('click', goToMainPage);


});





