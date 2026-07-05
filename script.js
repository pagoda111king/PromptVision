const state = {
  activeFilter: 'all',
};

const normalize = (value) => value.toLowerCase().trim();

const getPromptText = (button) => {
  const prompt = button.closest('.masonry-item')?.querySelector('.item-prompt');
  return prompt?.textContent.trim().replace(/^"|"$/g, '') ?? '';
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

const showCopyState = (button, success) => {
  const label = button.querySelector('span');
  const original = button.dataset.originalLabel || label?.textContent || '复制提示词';

  button.dataset.originalLabel = original;
  button.classList.toggle('is-copied', success);
  if (label) {
    label.textContent = success ? '已复制' : '复制失败';
  }

  window.setTimeout(() => {
    button.classList.remove('is-copied');
    if (label) {
      label.textContent = original;
    }
  }, 1600);
};

document.addEventListener('DOMContentLoaded', () => {
  const items = Array.from(document.querySelectorAll('.masonry-item'));
  const categoryButtons = Array.from(document.querySelectorAll('.category-btn'));
  const searchInput = document.querySelector('#prompt-search');
  const searchButton = document.querySelector('.search-btn');
  const emptyState = document.querySelector('.empty-state');

  const applyFilters = () => {
    const query = normalize(searchInput?.value ?? '');
    let visibleCount = 0;

    items.forEach((item) => {
      const category = item.dataset.category || '';
      const content = normalize(`${item.textContent} ${item.querySelector('img')?.alt ?? ''}`);
      const matchesCategory = state.activeFilter === 'all' || category === state.activeFilter;
      const matchesQuery = query === '' || content.includes(query);
      const shouldShow = matchesCategory && matchesQuery;

      item.hidden = !shouldShow;
      if (shouldShow) {
        visibleCount += 1;
      }
    });

    if (emptyState) {
      emptyState.hidden = visibleCount > 0;
    }
  };

  categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      state.activeFilter = button.dataset.filter || 'all';
      if (searchInput) {
        searchInput.value = '';
      }
      categoryButtons.forEach((candidate) => candidate.classList.toggle('active', candidate === button));
      applyFilters();
    });
  });

  document.querySelectorAll('.btn-copy').forEach((button) => {
    button.addEventListener('click', async (event) => {
      event.stopPropagation();
      const promptText = getPromptText(button);

      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(promptText);
        } else {
          fallbackCopy(promptText);
        }
        showCopyState(button, true);
      } catch {
        showCopyState(button, false);
      }
    });
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
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      promptIndex = (promptIndex + 1) % prompts.length;
      typeSpeed = 500; // Pause before new word
    }
    setTimeout(type, typeSpeed);
  };
  setTimeout(type, 1000);

  // Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));
});
