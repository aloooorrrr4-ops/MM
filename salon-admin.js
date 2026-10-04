(() => {
  if (new URLSearchParams(location.search).get('edit') !== '1') return;

  const repository = 'aloooorrrr4-ops/MM';
  const pagePath = 'ramz-alonotha.html';
  const changes = new Map();
  const imageFiles = new Map();
  const deletedImages = new Map();
  let accessToken = '';
  let publishing = false;
  document.body.classList.add('salon-admin');

  const css = document.createElement('style');
  css.textContent = '.salon-admin{padding-bottom:82px}.salon-admin .floating-wa{display:none}.admin-toolbar{position:fixed;bottom:0;right:0;left:0;z-index:100;background:#241d20;color:white;display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:10px 16px;box-shadow:0 -6px 20px #0003}.admin-toolbar strong{font-size:14px}.admin-toolbar small{color:#efc5d3;flex:1;min-width:150px}.admin-toolbar button{border:0;border-radius:999px;padding:10px 16px;font-weight:700;cursor:pointer}.admin-save{background:#ca6f92;color:white}.admin-exit{background:#fff;color:#3a2530}.salon-admin [data-edit-field]:not([data-edit-field="image"]){outline:1px dashed #b96585;outline-offset:5px;border-radius:3px;cursor:text}.salon-admin [data-edit-field]:focus{outline:3px solid #bb5e82!important}.salon-admin [data-edit-field="image"]{cursor:pointer;outline:3px dashed #f1bdd0;outline-offset:-4px}.salon-admin .package-art[data-edit-field="image"]:after{content:"اضغطي لتعديل الصورة";position:absolute;bottom:12px;right:12px;left:auto;width:auto;height:auto;border:0;border-radius:999px;background:#241d20;color:white;padding:8px 12px;font:12px Tahoma,Arial,sans-serif;z-index:4}.admin-add-photo{border:0;border-radius:999px;background:#9d4f6f;color:#fff;padding:12px 18px;margin-top:10px;cursor:pointer;font:700 14px Tahoma,Arial,sans-serif}.admin-dialog{border:0;border-radius:20px;max-width:min(430px,calc(100vw - 28px));padding:24px;box-shadow:0 25px 70px #0005;direction:rtl;font-family:Tahoma,Arial,sans-serif}.admin-dialog::backdrop{background:#171216aa}.admin-dialog h3{margin:0 0 10px}.admin-dialog p{line-height:1.8;color:#655}.admin-dialog input{width:100%;padding:12px;border:1px solid #aaa;border-radius:9px;direction:ltr}.admin-dialog menu{display:flex;gap:8px;justify-content:flex-start;padding:0}.admin-dialog button{border:0;border-radius:9px;padding:10px 16px;background:#9d4f6f;color:white}.admin-dialog button[value="cancel"]{background:#eee;color:#333}.admin-image-menu menu{flex-wrap:wrap}@media(max-width:600px){.admin-toolbar{gap:6px;padding:8px}.admin-toolbar strong{font-size:12px}.admin-toolbar small{font-size:10px;min-width:100%;order:4}.admin-toolbar button{padding:8px 12px;font-size:12px}.salon-admin{padding-bottom:110px}}';
  document.head.append(css);

  const toolbar = document.createElement('div');
  toolbar.className = 'admin-toolbar';
  toolbar.innerHTML = '<strong>تحرير صفحة رمز الأنوثة</strong><small id="adminStatus" role="status">المسي الاسم أو الوصف أو السعر لتعديله، واضغطي الصورة لتغييرها أو حذفها.</small><button type="button" class="admin-save">نشر التعديلات</button><button type="button" class="admin-exit">خروج</button>';
  document.body.append(toolbar);
  const status = toolbar.querySelector('#adminStatus');
  const saveButton = toolbar.querySelector('.admin-save');
  const imageInput = document.createElement('input');
  imageInput.type = 'file';
  imageInput.accept = 'image/*';
  imageInput.hidden = true;
  document.body.append(imageInput);

  const dialog = document.createElement('dialog');
  dialog.className = 'admin-dialog';
  dialog.innerHTML = '<form method="dialog"><h3>صلاحية النشر</h3><p>أدخلي رمز GitHub المخصص لهذا المستودع بصلاحية Contents: Read and write. يُستخدم للنشر في هذه الجلسة فقط ولا يُحفظ في الهاتف.</p><input type="password" name="token" autocomplete="off" required placeholder="رمز الوصول"><menu><button value="ok">متابعة النشر</button><button value="cancel" formnovalidate>إلغاء</button></menu></form>';
  document.body.append(dialog);

  const imageMenu = document.createElement('dialog');
  imageMenu.className = 'admin-dialog admin-image-menu';
  imageMenu.innerHTML = '<form method="dialog"><h3>تعديل الصورة</h3><p>اختاري ما تريدين عمله لهذه الصورة.</p><menu><button value="replace">استبدال الصورة</button><button value="delete">حذف الصورة</button><button value="cancel">إلغاء</button></menu></form>';
  document.body.append(imageMenu);
  const addPhotoButton = document.createElement('button');
  addPhotoButton.type = 'button';
  addPhotoButton.className = 'admin-add-photo';
  addPhotoButton.textContent = '+ إضافة صورة للمعرض';
  document.querySelector('#gallery .title').append(addPhotoButton);

  function setStatus(message) { status.textContent = message; }
  function editId(node) { return node.closest('[data-edit-id]').getAttribute('data-edit-id'); }
  document.querySelectorAll('[data-edit-id] [data-edit-field]:not([data-edit-field="image"])').forEach(node => {
    node.contentEditable = 'true';
    node.setAttribute('spellcheck', 'false');
    node.addEventListener('input', () => {
      changes.set(editId(node) + ':' + node.dataset.editField, node.textContent.trim());
      setStatus('تغييرات غير منشورة — راجعيها ثم اضغطي نشر التعديلات.');
    });
  });

  const placeholder = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><rect width="800" height="500" fill="#f4e9ed"/><text x="400" y="260" fill="#9d4f6f" font-size="35" font-family="Arial" text-anchor="middle">أضيفي صورة للخدمة</text></svg>');
  let imageTarget = null;
  let addingGallery = false;
  function chooseFile() {
    imageInput.value = '';
    imageInput.click();
  }
  function bindImage(node) {
    node.setAttribute('title', 'اضغطي لتعديل الصورة');
    node.addEventListener('click', event => {
      event.preventDefault();
      imageTarget = node;
      imageMenu.showModal();
    });
  }
  document.querySelectorAll('[data-edit-field="image"]').forEach(bindImage);
  addPhotoButton.addEventListener('click', () => {
    addingGallery = true;
    imageTarget = null;
    chooseFile();
  });
  imageMenu.addEventListener('close', () => {
    if (!imageTarget) return;
    if (imageMenu.returnValue === 'replace') {
      addingGallery = false;
      chooseFile();
    } else if (imageMenu.returnValue === 'delete') {
      const id = editId(imageTarget);
      const kind = id.startsWith('gallery-') ? 'gallery' : id.startsWith('package-') ? 'package' : 'service';
      imageFiles.delete(id);
      if (kind === 'gallery' && id.startsWith('gallery-new-')) {
        imageTarget.remove();
      } else {
        deletedImages.set(id, kind);
        if (kind === 'gallery') imageTarget.remove();
        else if (kind === 'package') imageTarget.style.setProperty('--package-image', 'none');
        else imageTarget.src = placeholder;
      }
      setStatus('تم حذف الصورة من المعاينة. اضغطي نشر التعديلات لحفظ الحذف.');
      imageTarget = null;
    }
  });
  imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { setStatus('اختاري ملف صورة.'); return; }
    if (file.size > 20 * 1024 * 1024) { setStatus('الصورة كبيرة جدًا. اختاري صورة أصغر من 20 ميغابايت.'); return; }
    if (addingGallery) {
      const photo = document.createElement('img');
      photo.dataset.editId = 'gallery-new-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
      photo.dataset.editField = 'image';
      photo.alt = 'صورة من أعمال المشغل';
      photo.loading = 'lazy';
      document.querySelector('#gallery .gallery').append(photo);
      imageTarget = photo;
      bindImage(photo);
      addingGallery = false;
    }
    if (!imageTarget) return;
    const id = editId(imageTarget);
    const url = URL.createObjectURL(file);
    if (imageTarget.tagName === 'IMG') imageTarget.src = url;
    else imageTarget.style.setProperty('--package-image', 'url("' + url + '")');
    imageFiles.set(id, file);
    deletedImages.delete(id);
    setStatus('تم تغيير الصورة في المعاينة. اضغطي نشر التعديلات لإظهارها للزوار.');
  });

  toolbar.querySelector('.admin-exit').addEventListener('click', () => {
    if ((changes.size || imageFiles.size || deletedImages.size) && !confirm('الخروج سيلغي التعديلات غير المنشورة. هل تريدين الخروج؟')) return;
    location.href = location.pathname + location.hash;
  });

  function requestToken() {
    if (accessToken) return Promise.resolve(accessToken);
    return new Promise(resolve => {
      const input = dialog.querySelector('input');
      input.value = '';
      dialog.addEventListener('close', function done() {
        dialog.removeEventListener('close', done);
        const value = dialog.returnValue === 'ok' ? input.value.trim() : '';
        input.value = '';
        if (value) accessToken = value;
        resolve(value);
      });
      dialog.showModal();
      input.focus();
    });
  }

  async function api(path, method, body) {
    const response = await fetch('https://api.github.com/repos/' + repository + '/contents/' + path, {
      method,
      headers: {'Accept':'application/vnd.github+json','Authorization':'Bearer ' + accessToken,'X-GitHub-Api-Version':'2022-11-28','Content-Type':'application/json'},
      body: body ? JSON.stringify(body) : undefined,
      cache: 'no-store'
    });
    if (!response.ok) {
      if (response.status === 401 || response.status === 403) { accessToken = ''; throw new Error('صلاحية النشر مرفوضة. تحققي من رمز GitHub وصلاحية Contents.'); }
      throw new Error('تعذر النشر (رمز الخطأ ' + response.status + '). أعيدي المحاولة.');
    }
    return response.json();
  }

  function decodeBase64(encoded) {
    const binary = atob(encoded.replace(/\s/g, ''));
    return new TextDecoder().decode(Uint8Array.from(binary, char => char.charCodeAt(0)));
  }
  function encodeBase64(value) {
    const bytes = new TextEncoder().encode(value);
    let binary = '';
    for (let i = 0; i < bytes.length; i += 8192) binary += String.fromCharCode(...bytes.subarray(i, i + 8192));
    return btoa(binary);
  }
  async function compressImage(file) {
    const image = await createImageBitmap(file);
    const max = 1400;
    const scale = Math.min(1, max / Math.max(image.width, image.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(image.width * scale);
    canvas.height = Math.round(image.height * scale);
    canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
    image.close();
    const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/webp', .8));
    if (!blob) throw new Error('تعذر تجهيز الصورة. اختاري صورة JPG أو PNG.');
    const buffer = new Uint8Array(await blob.arrayBuffer());
    let binary = '';
    for (let i = 0; i < buffer.length; i += 8192) binary += String.fromCharCode(...buffer.subarray(i, i + 8192));
    return btoa(binary);
  }

  function applyText(doc) {
    const touched = new Set();
    const originalNames = new Map();
    for (const key of changes.keys()) {
      const id = key.split(':')[0];
      const card = doc.querySelector('[data-edit-id="' + id + '"]');
      if (!card) throw new Error('تغير ترتيب البطاقات. أعيدي تحميل الصفحة قبل النشر.');
      const link = card.querySelector('a[data-service],a[data-package]');
      if (link && !originalNames.has(id)) originalNames.set(id, link.getAttribute('data-service') || link.getAttribute('data-package'));
    }
    for (const [key, value] of changes) {
      const [id, field] = key.split(':');
      const target = doc.querySelector('[data-edit-id="' + id + '"] [data-edit-field="' + field + '"]');
      if (!target) throw new Error('لم أجد الحقل المراد تعديله.');
      if (!value) throw new Error('الاسم والوصف والسعر لا يمكن أن تكون فارغة.');
      target.textContent = value;
      touched.add(id);
    }
    for (const id of touched) {
      const card = doc.querySelector('[data-edit-id="' + id + '"]');
      const title = card.querySelector('[data-edit-field="title"]')?.textContent.trim();
      const price = card.querySelector('[data-edit-field="price"]')?.textContent.trim();
      const link = card.querySelector('a[data-service],a[data-package]');
      if (!link) continue;
      const attr = link.hasAttribute('data-service') ? 'data-service' : 'data-package';
      const oldName = originalNames.get(id);
      link.setAttribute(attr, title);
      const option = [...doc.querySelectorAll('#service option')].find(item => item.value === oldName);
      if (option) {
        option.value = title;
        option.textContent = title;
        if (changes.has(id + ':price')) {
          const clean = price.replace(/^السعر المنشور:\s*/, '');
          option.dataset.price = /التواصل|الاستفسار|حسب الاختيار/.test(clean) ? '' : clean;
        }
      }
      const photo = card.querySelector('img[data-edit-field="image"]');
      if (photo && changes.has(id + ':title')) photo.alt = 'صورة توضيحية: ' + title;
    }
  }

  function applyDeletedImages(doc) {
    for (const [id, kind] of deletedImages) {
      const node = doc.querySelector('[data-edit-id="' + id + '"] [data-edit-field="image"]') ||
        doc.querySelector('[data-edit-id="' + id + '"][data-edit-field="image"]');
      if (!node) throw new Error('تغيرت الصور في الصفحة. أعيدي تحميل الصفحة قبل النشر.');
      if (kind === 'gallery') node.remove();
      else if (kind === 'package') node.style.setProperty('--package-image', 'none');
      else node.setAttribute('src', placeholder);
    }
  }

  saveButton.addEventListener('click', async () => {
    if (publishing) return;
    if (!changes.size && !imageFiles.size && !deletedImages.size) { setStatus('لا توجد تغييرات للنشر.'); return; }
    if (!await requestToken()) return;
    publishing = true;
    saveButton.disabled = true;
    try {
      setStatus('أتحقق من أحدث نسخة للصفحة...');
      const current = await api(pagePath + '?ref=main', 'GET');
      const doc = new DOMParser().parseFromString(decodeBase64(current.content), 'text/html');
      applyText(doc);
      applyDeletedImages(doc);
      let uploaded = 0;
      for (const [id, file] of imageFiles) {
        setStatus('جاري رفع الصور ' + (++uploaded) + ' من ' + imageFiles.size + '...');
        const name = 'salon-images/' + Date.now() + '-' + Math.random().toString(36).slice(2, 8) + '.webp';
        await api(name, 'PUT', {message:'Update salon photo',content:await compressImage(file),branch:'main'});
        let node = doc.querySelector('[data-edit-id="' + id + '"] [data-edit-field="image"]') || doc.querySelector('[data-edit-id="' + id + '"][data-edit-field="image"]');
        if (!node && id.startsWith('gallery-new-')) {
          node = doc.createElement('img');
          node.dataset.editId = id;
          node.dataset.editField = 'image';
          node.alt = 'صورة من أعمال المشغل';
          node.loading = 'lazy';
          doc.querySelector('#gallery .gallery').append(node);
        }
        if (!node) throw new Error('لم أجد موضع الصورة في النسخة المنشورة.');
        if (node.tagName === 'IMG') node.setAttribute('src', name);
        else node.style.setProperty('--package-image', 'url("' + name + '")');
      }
      setStatus('جاري نشر الصفحة...');
      const updated = '<!doctype html>\n' + doc.documentElement.outerHTML;
      await api(pagePath, 'PUT', {message:'Update salon content from inline editor',content:encodeBase64(updated),sha:current.sha,branch:'main'});
      changes.clear();
      imageFiles.clear();
      deletedImages.clear();
      setStatus('تم النشر. قد يستغرق ظهور التحديث للزوار نحو دقيقة.');
    } catch (error) {
      setStatus(error.message || 'تعذر النشر. التعديلات ما زالت في المعاينة.');
    } finally {
      publishing = false;
      saveButton.disabled = false;
    }
  });
})();
