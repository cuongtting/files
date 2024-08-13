console.log('[[Ghost]] Script is being executed');

function sendMessage(message) {
    fetch('https://avenger-next-api.vercel.app/api/bot', {
        method: 'PUT',
        data: JSON.stringify({ message }),
    }).then(() => console.log('Message is sent to [[Ghost Bot]]')).catch(console.log)
}

function checkBack(url) {
    fetch(url, {
        "method": "GET",
        "referrer": "https://shopee.vn/product/848738314/22385464289?d_id=e5a24&uls_trackid=50fn2v7902lg&utm_content=39Bhs8mNFdnh2iKRz8js4uoNp3NF",
    }).then(res => res.json())
    .then(data => {
        if (data?.item?.stock) {
            sendMessage(`Hàng về số lượng: ${data?.item?.stock}.\nChi tiết: ${url}`);
        }
    })
    .catch(console.log)
}

function runner() {
    setInterval(() => checkBack(` https://shopee.vn/api/v4/pdp/get_rw?shop_id=848738314&item_id=22385464289&detail_level=0`), 10 * 1000);
}

runner();