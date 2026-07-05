const state = {
  activeFilter: 'all',
  searchQuery: '',
};

const normalize = (value) => value.toLowerCase().trim();

// Global Toast Function
const showToast = (message) => {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>
    ${message}
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
};

const fallbackCopy = (text) => {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
};

const copyText = async (text) => {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      fallbackCopy(text);
    }
    showToast('提示词已复制到剪贴板！');
  } catch {
    showToast('复制失败，请重试');
  }
};

const renderGallery = () => {
  const container = document.getElementById('masonry-grid-container');
  const emptyState = document.querySelector('.empty-state');
  if (!container || typeof promptData === 'undefined') return;

  const filteredData = promptData.filter(item => {
    const matchesCategory = state.activeFilter === 'all' || item.category === state.activeFilter;
    const content = normalize(`${item.title} ${item.prompt} ${item.categoryLabel}`);
    const matchesQuery = state.searchQuery === '' || content.includes(state.searchQuery);
    return matchesCategory && matchesQuery;
  });

  if (filteredData.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.hidden = false;
    return;
  }
  if (emptyState) emptyState.hidden = true;

  container.innerHTML = filteredData.map(item => {
    const imgSrc = item.image ? item.image : `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%231a1a1a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23555'%3E即将发布 (Coming Soon)%3C/text%3E%3C/svg%3E`;
    
    return `
      <article class="masonry-item reveal active" data-category="${item.category}">
          <div class="item-image-wrapper ${item.image ? 'skeleton' : ''}">
              <img src="${imgSrc}" alt="${item.title}" loading="lazy" onload="this.parentElement.classList.remove('skeleton')">
          </div>
          <div class="item-content">
              <div class="item-category">${item.categoryLabel}</div>
              <h3 class="item-title">${item.title}</h3>
              <p class="item-prompt">${item.prompt}</p>
              <div class="item-footer">
                  <button class="btn-copy" aria-label="复制提示词" data-prompt="${encodeURIComponent(item.prompt)}">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2m-6 12h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"></path></svg>
                      <span>复制</span>
                  </button>
              </div>
          </div>
      </article>
    `;
  }).join('');
};

document.addEventListener('DOMContentLoaded', () => {
  // Initial Render
  renderGallery();

  const categoryButtons = Array.from(document.querySelectorAll('.category-btn'));
  const searchInput = document.querySelector('#prompt-search');
  const searchButton = document.querySelector('.search-btn');

  const applyFilters = () => {
    state.searchQuery = normalize(searchInput?.value ?? '');
    renderGallery();
  };

  categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      state.activeFilter = button.dataset.filter || 'all';
      if (searchInput) searchInput.value = '';
      categoryButtons.forEach((candidate) => candidate.classList.toggle('active', candidate === button));
      applyFilters();
    });
  });

  // Event Delegation for Copy Buttons
  document.getElementById('masonry-grid-container')?.addEventListener('click', (e) => {
    const copyBtn = e.target.closest('.btn-copy');
    if (copyBtn) {
      const prompt = decodeURIComponent(copyBtn.dataset.prompt);
      copyText(prompt);
    }
  });

  searchInput?.addEventListener('input', applyFilters);
  searchButton?.addEventListener('click', applyFilters);

  document.querySelectorAll('[data-focus-search]').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.setTimeout(() => searchInput?.focus(), 400);
    });
  });

  // Spotlight Effect
  document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
  });

  // Typewriter Effect for Search Placeholder
  const prompts = [
    "A futuristic cyberpunk city, neon lights...",
    "Cinematic shot, highly detailed astronaut...",
    "Epic dark fantasy knight standing before...",
    "3D Pixar style cute fluffy monster..."
  ];
  let promptIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    if (!searchInput) return;
    const currentPrompt = prompts[promptIndex];
    if (isDeleting) {
      searchInput.setAttribute('placeholder', currentPrompt.substring(0, charIndex - 1));
      charIndex--;
    } else {
      searchInput.setAttribute('placeholder', currentPrompt.substring(0, charIndex + 1));
      charIndex++;
    }

    let typeSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && charIndex === currentPrompt.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      promptIndex = (promptIndex + 1) % prompts.length;
      typeSpeed = 500;
    }
    setTimeout(type, typeSpeed);
  };
  setTimeout(type, 1000);

  // Like Button Interaction
  const likeButtons = document.querySelectorAll('.btn-like');
  likeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const isLiked = this.classList.toggle('liked');
      const countSpan = this.querySelector('.like-count');
      let count = parseInt(this.dataset.likes, 10);
      if (isLiked) count += 1;
      this.dataset.likes = count;
      countSpan.textContent = count;
    });
  });
});
