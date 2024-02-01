function candleChart(elementId, data, height= 500, fractionDigits= 13) {
    const chart = LightweightCharts.createChart(document.getElementById(elementId), {
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

    chart.timeScale().applyOptions({
        borderColor: 'transparent',
        rightOffset: 1,
        barSpacing: 15,
        minBarSpacing: 10,
        timeVisible: true,
    });
}







