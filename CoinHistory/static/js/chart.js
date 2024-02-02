function getChart(elementId, height= 500, fractionDigits= 13) {
    return LightweightCharts.createChart(document.getElementById(elementId), {
        height: height,
        timeScale: {
            timeVisible: true,
        },
        rightPriceScale: {
            scaleMargins: {
                top: 0.1,
                bottom: 0.1,
            },
            borderVisible: false,
        },
        layout: {
            backgroundColor: '#ffffff',
            textColor: '#333',
        },
        grid: {
            vertLines: {
                color: '#ebebeb',
            },
            horzLines: {
                color: '#f0f3fa',
            },
        },
        localization: {
            priceFormatter: price => parseFloat(price).toFixed(fractionDigits),
        },
    });
}


function candlestickChart(elementId, data, height= 500, fractionDigits= 13) {

    const chart = getChart(elementId, height, fractionDigits)
    const candleSeries = chart.addCandlestickSeries({
        upColor: "#16C784",
        downColor: "#EA3943",
        borderDownColor: "#EA3943",
        borderUpColor: "#16C784",
        wickDownColor: "#EA3943",
        wickUpColor: "#16C784",
    });
    for (let i = 0; i < data.length; i++) {
        candleSeries.update(data[i]);
    }
    const allLineSeries = [];

    function createNewSeries() {
        const lineSeries = chart.addLineSeries({
            color: 'black',
            lineWidth: 2,
        });
        lineSeries.applyOptions({
            lineVisible: true,
            axisLabelVisible: false,
            lastValueVisible: true,
            priceLineVisible: true,
        });
        allLineSeries.push(lineSeries);
        return lineSeries;
    }

    let currentSeries = createNewSeries();
    for (let i = 0; i < data.length; i++) {
        if ('value' in data[i]) {
            currentSeries.update(data[i]);
        } else {
            // Если текущий элемент не содержит value, начинаем новую серию с последующего элемента.
            if (i < data.length - 1 && 'value' in data[i + 1]) {
                currentSeries = createNewSeries();
            }
        }
    }
    chart.timeScale().applyOptions({
        borderColor: 'transparent',
        rightOffset: 1,
        barSpacing: 15,
        minBarSpacing: 10,
        timeVisible: true,
    });

    // line toggle
    let lineVisible= true;
    document.getElementById('line-toggle').onclick = function() {
        lineVisible = !lineVisible;

        // Применим видимость линии ко всем LineSeries в массиве.
        allLineSeries.forEach(function(series) {
            series.applyOptions({
                lineVisible: lineVisible,
                lastValueVisible: lineVisible,
            });
        });

        let toggleButton = document.getElementById('line-toggle');
        if (lineVisible) {
            toggleButton.classList.add('active');
        } else {
            toggleButton.classList.remove('active');
        }
    };

    // candlestick toggle
    let candlestickVisible = true;
    document.getElementById('candlestick-toggle').onclick = function() {
        candlestickVisible = !candlestickVisible;
        candleSeries.applyOptions({
            visible: candlestickVisible
        });

        let toggleButton = document.getElementById('candlestick-toggle');
        if (candlestickVisible) {
            toggleButton.classList.add('active');
        } else {
            toggleButton.classList.remove('active');
        }
    };

}







