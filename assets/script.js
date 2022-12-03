
const audio = document.querySelector('audio')
const yearTag = document.querySelector('.navbar_time--year span')
const monthTag = document.querySelector('.navbar_time--month span')
const dayTag = document.querySelector('.navbar_time--day span')
const hourTag = document.querySelector('.navbar_time--hour span');
const minuteTag = document.querySelector('.navbar_time--minute span')
const secondTag = document.querySelector('.navbar_time--second span')
const timeHandle = () => {
    const dayStart = new Date("January 1, 2021");
    const dayNow = new Date();
    const timeGap = dayNow.getTime() - dayStart.getTime();

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const date = hour * 24;
    const month = date * 30;
    const year = month * 12;

    const textYear = Math.floor(timeGap / year);
    const textMonth = Math.floor((timeGap % year) / month);
    const textDay = Math.floor((timeGap % month) / date);
    const textHour = Math.floor((timeGap % date) / hour);
    const textMinute = Math.floor((timeGap % hour) / minute);
    const textSecond = Math.floor((timeGap % minute) / second);

    yearTag.innerText = textYear
    monthTag.innerText = textMonth
    dayTag.innerText = textDay - 9;
    hourTag.innerText = textHour;
    minuteTag.innerText = textMinute;
    secondTag.innerText = textSecond;
}
setInterval(timeHandle,1000)


const data = [
    {
        imgSrc: '/images/img1.jpg',
        date: '20/02/2022',
        content: 'Kỉ niệm đi ăn Dokki sinh nhật của ú'
    },
    {
        imgSrc: '/images/img2.jpg',
        date: '20/02/2022',
        content: 'Lại là ăn sinh nhật hehe'
    },
    {
        imgSrc: '/images/img3.jpg',
        date: '20/02/2022',
        content: 'heo chụp camera thấy 2 người'
    },
    {
        imgSrc: '/images/img4.jpg',
        date: '30/06/2022',
        content: 'Bữa cuối kì trước khi nghỉ để ôn thi đại học'
    },
    {
        imgSrc: '/images/img5.jpg',
        date: '30/06/2022',
        content: 'Lại chụp hình tiếp'
    },
    {
        imgSrc: '/images/img6.jpg',
        date: '01/07/2022',
        content: 'Ngày đi nhận giấy báo dự thi, ngày này chia tay mái trường cấp 3'
    },
    {
        imgSrc: '/images/img7.jpg',
        date: '01/07/2022',
        content: 'Mãi nhớ ngày này huhu'
    },
    {
        imgSrc: '/images/img8.jpg',
        date: '10/07/2022',
        content: 'Ngày này đi karaoke sau khi thi xong, ú làm mất dây đeo của heo mà ai ngờ nó trên nón kkk'
    },
    {
        imgSrc: '/images/img9.jpg',
        date: '13/07/2022',
        content: 'Dẫn heo đi Aeon chơi sau khi thi xong'
    },
    {
        imgSrc: '/images/img10.jpg',
        date: '13/07/2022',
        content: 'Chụp tiếp :v'
    },
    {
        imgSrc: '/images/img11.jpg',
        date: '13/07/2022',
        content: 'Thử nón đôi :v'
    },
    {
        imgSrc: '/images/img12.jpg',
        date: '13/07/2022',
        content: 'Lén chụp hình với gương kkk'
    },
    {
        imgSrc: '/images/img13.jpg',
        date: '25/07/2022',
        content: 'Đi xem phim nèee'
    },
    {
        imgSrc: '/images/img14.jpg',
        date: '25/07/2022',
        content: 'Chụp cho heo mà heo chê xấu huhu'
    },
    {
        imgSrc: '/images/img15.jpg',
        date: '09/08/2022',
        content: 'Dẫn heo đi thảo cầm viên sau khi ú bỏ heo ở nhà đi chơi kkk'
    }
    ,
    {
        imgSrc: '/images/img16.jpg',
        date: '09/08/2022',
        content: 'Dẫn heo đi thảo cầm viên sau khi ú bỏ heo ở nhà đi chơi kkk'
    }
    ,
    {
        imgSrc: '/images/img17.jpg',
        date: '09/08/2022',
        content: 'Dẫn heo đi thảo cầm viên sau khi ú bỏ heo ở nhà đi chơi kkk'
    }
    ,
    {
        imgSrc: '/images/img18.jpg',
        date: '09/08/2022',
        content: 'Dẫn heo đi thảo cầm viên sau khi ú bỏ heo ở nhà đi chơi kkk'
    }
    ,
    {
        imgSrc: '/images/img19.jpg',
        date: '25/08/2022',
        content: 'Ú và heo cùng nhau đi thăm trường UIT nè hehe'
    }
    ,
    {
        imgSrc: '/images/img20.jpg',
        date: '25/08/2022',
        content: 'Check-in nhà vệ sinh UIT nè'
    }
    ,
    {
        imgSrc: '/images/img21.jpg',
        date: '25/08/2022',
        content: 'Thăm thư viện UIT nè'
    }
    ,
    {
        imgSrc: '/images/img22.jpg',
        date: '25/08/2022',
        content: 'Sau đó đón xe đi Dinh Độc Lập chơi'
    }
    ,
    {
        imgSrc: '/images/img32.jpg',
        date: '25/08/2022',
        content: 'Lúc này heo chửi ú chụp xấu nên không có hình đẹp hehe quá tiếc'
    }
    ,
    {
        imgSrc: '/images/img23.jpg',
        date: '01/09/2022',
        content: 'Đi hội chợ ẩm thực ở nhà văn hóa nè mà mưa hehe'
    }
    ,
    {
        imgSrc: '/images/img24.jpg',
        date: '24/09/2022',
        content: 'Tranh thủ mua đồ 2hand trước khi đi show nhạc nè'
    }
    ,
    {
        imgSrc: '/images/img25.jpg',
        date: '24/09/2022',
        content: 'Đi xem Phương Ly với Trúc Nhân'
    }
    ,
    {
        imgSrc: '/images/img26.jpg',
        date: '02/10/2022',
        content: 'Ngày heo xuống nhận trọ ú và heo làm lành nè'
    }
    ,
    {
        imgSrc: '/images/img27.jpg',
        date: '07/10/2022',
        content: 'Ngày ú chở heo đi Đền vua Hùng đi ngoại khóa của UFM nè'
    }
    ,
    {
        imgSrc: '/images/img28.jpg',
        date: '30/10/2022',
        content: 'Đi Gigamall Thủ Đức ăn Spicy Box nè'
    }
    ,
    {
        imgSrc: '/images/img29.jpg',
        date: '03/11/2022',
        content: 'Kỉ niệm lần đầu ov9 cùng nhau hehe'
    }
    ,
    {
        imgSrc: '/images/img30.jpg',
        date: '10/11/2022',
        content: 'Đi show gặp người nổi tiếng và làm lành sau cuộc cãi nhau xém chia tay kkk'
    }
    ,
    {
        imgSrc: '/images/img31.jpg',
        date: '19/11/2022',
        content: 'Dẫn heo đi gặp Hiếu Thứ 2 và ov9 ở Cloud :v'
    }
]

const contentDiv = document.querySelector('.content')
contentDiv.style.width = `${100 * Math.ceil(data.length / 3)}%`
data.forEach((currentValue) => {
    const card = document.createElement('div')
    card.className = "content-card"
    const cardImage = document.createElement('div')
    cardImage.className = "content-card-image"
    const img = document.createElement('img')
    img.src = currentValue.imgSrc
    cardImage.appendChild(img)
    const cardText = document.createElement('div')
    cardText.className = "content-card-text"
    const timeText = document.createElement('h5')
    timeText.innerText = currentValue.date
    const contentText = document.createElement('p')
    contentText.innerText = currentValue.content

    cardText.appendChild(timeText)
    cardText.appendChild(contentText)

    card.appendChild(cardImage)
    card.appendChild(cardText)
    
    contentDiv.appendChild(card)
})

var positionX = 0
var index = 0
const btnPrev = document.querySelector('.prev')
const btnNext = document.querySelector('.next')

const cardLength = 316;

btnPrev.addEventListener("click", () => {
    handleDirection(0)
})
btnNext.addEventListener("click", () => {
    handleDirection(1)
})

function handleDirection(direction){
    if(direction == 0){
        if(index - 1 < 0) return;
        --index;
        positionX += cardLength
        contentDiv.style.transform = `translateX(${positionX}px)`
    } else {
        if(index + 1 >= data.length - 1) return;
        ++index;
        positionX -= cardLength
        contentDiv.style.transform = `translateX(${positionX}px)`
    }
}

const wrapperDynamicText = document.querySelector('.wrapper')

setTimeout(() => {
    wrapperDynamicText.classList.add('unactive')
},15000)


const introHeart = document.querySelector('.intro-heart')
const heartIcon = document.querySelector('.heart-icon')

heartIcon.addEventListener('click', () => {
    introHeart.classList.add('unactive')
    audio.play()
})
