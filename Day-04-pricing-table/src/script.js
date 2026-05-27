
  const plans = [
    {
      name:"Starter",
      tagline:"For solo makers shipping their first idea.",
      monthly:12, yearly:9,
      cta:"Start free",
      features:["1 project","Up to 3 collaborators","Community support","Basic analytics"]
    },
    {
      name:"Studio",
      tagline:"For growing teams who want more horsepower.",
      monthly:32, yearly:24, featured:true,
      cta:"Try Studio",
      features:["Unlimited projects","Up to 15 collaborators","Priority support","Advanced analytics","Custom domains"]
    },
    {
      name:"Atelier",
      tagline:"For studios and agencies that need it all.",
      monthly:78, yearly:64,
      cta:"Contact sales",
      features:["Everything in Studio","Unlimited collaborators","Dedicated success manager","SSO & audit logs","99.99% uptime SLA"]
    }
  ];

  let yearly = true;
  const container = document.getElementById("plans");
  const btnM = document.getElementById("btn-monthly");
  const btnY = document.getElementById("btn-yearly");

  const tick = `<span class="tick"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 8.5 7 12.5 13 4.5"/></svg></span>`;

  function render(){
    container.innerHTML = plans.map((p,i)=>`
      <div class="col-md-4">
        <div class="plan ${p.featured?'featured':''}" style="animation-delay:${i*90}ms">
          ${p.featured?'<span class="ribbon">Most popular</span>':''}
          <h3>${p.name}</h3>
          <p class="muted mt-2 mb-0">${p.tagline}</p>
          <div class="price-wrap">
            <span class="price flip" data-price>$${yearly?p.yearly:p.monthly}</span>
            <span class="price-sub">/mo</span>
          </div>
          <div class="price-sub mt-1">${yearly?'Billed annually':'Billed monthly'}</div>
          <button class="btn-plan">${p.cta}</button>
          <ul class="features">
            ${p.features.map(f=>`<li>${tick}<span>${f}</span></li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  function setPeriod(isYearly){
    yearly = isYearly;
    btnY.classList.toggle('active', isYearly);
    btnM.classList.toggle('active', !isYearly);
    // Update prices with flip animation, keep cards in place
    document.querySelectorAll('[data-price]').forEach((el,idx)=>{
      el.textContent = '$' + (isYearly ? plans[idx].yearly : plans[idx].monthly);
      el.classList.remove('flip'); void el.offsetWidth; el.classList.add('flip');
    });
    document.querySelectorAll('.plan .price-sub.mt-1').forEach(el=>{
      el.textContent = isYearly ? 'Billed annually' : 'Billed monthly';
    });
  }

  btnM.addEventListener('click', ()=>setPeriod(false));
  btnY.addEventListener('click', ()=>setPeriod(true));
  render();
