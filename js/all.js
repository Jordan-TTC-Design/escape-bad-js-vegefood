// TODO: 修正 ESLint 錯誤、補上分號、前輩說要改單引號 QQ

const url = 'https://hexschool.github.io/js-filter-data/data.json';

const table = document.querySelector('.table-content');
const filter = document.querySelector('.filter');

let data;
let showData = [];
let category = '';

function renderData() {
  let str = '';
  showData.forEach((i) => {
    const content = `<tr><td>${i['作物名稱']}</td><td>${i['市場名稱']}</td><td>${i['上價']}</td><td>${i['中價']}</td><td>${i['下價']}</td><td>${i['平均價']}}</td><td>${i['交易量']}}</td></tr>`;
    str += content;
  });
  table.innerHTML = str;
}
this.axios.get(url).then((res) => {
  data = res.data.filter((a) => a.作物名稱);
  renderData();
});

function filterCategory(e) {
  if (e.target.nodeName === 'BUTTON') {
    category = e.target.dataset.category;
    showData = data.filter((i) => i['種類代碼'] === category);
    renderData();
  }
}

filter.addEventListener('click', filterCategory);
