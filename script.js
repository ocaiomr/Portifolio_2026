//tema escuro/claro
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const saved = (() => { try { return localStorage.getItem('theme'); } catch(e) { return null; } })();
if (saved === 'dark') root.setAttribute('data-theme','dark');
toggle.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  if (isDark) { root.removeAttribute('data-theme'); } else { root.setAttribute('data-theme','dark'); }
  try { localStorage.setItem('theme', isDark ? 'light' : 'dark'); } catch(e) {}
});

//scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

//contato
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  msg.textContent = 'Mensagem enviada! Em breve entrarei em contato.';
  form.reset();
});

//mascara form
function mascara_telefone()
{
    var tel_formatado = document.getElementById("tel").value

    tel_formatado = tel_formatado.slice(0,14)
    document.getElementById("tel").value = tel_formatado

    if (tel_formatado[0] != "(")
    {
        if(tel_formatado[0] != undefined)
        {
            document.getElementById("tel").value="("+tel_formatado[0]
        }
    }

    if (tel_formatado[3]!=")")
        {
            if(tel_formatado[3]!=undefined)
            {
                document.getElementById("tel").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
            }
        }

    if (tel_formatado[9]!="-")
        {
            if(tel_formatado[9]!=undefined)
            {
                document.getElementById("tel").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
            }
        }

        
}
