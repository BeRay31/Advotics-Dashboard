# Advotics-Dashboard
CSR Dashboard dedicated for Advotics interview task

# How To Run
1. Make sure you have node installed on your computer in order to use npm
2. Open Terminal in project directory
3. type `npm install` to install all project dependencies
4. type `npm run serve` (don't ever hit update, some updated packages make this project crash `chart.js 3.x` so i used `chart.js 2.9.x`)
5. Wait the project ready to open on your local browser
6. Open the project (Click link on the terminal)
7. Enjoy :)

# Project Goal
1. Implement Filter by Date Range and also implemented the Date Range Selector UI with specification:
    * When option Yesterday is clicked then highlight yesterday's date and the option Yesterday should be in green color and bold type.
    * When option Last 7 days is clicked, then highlight [the day's date - 7] to [the day's date - 1] and the option should be in green and bold type.
    * When option Last 30 days is clicked, then highlight [the day's date - 30] to [the day's date - 1] and the option should be in green and bold type
    * When option This Month is clicked, then highlight all dates from the beginning of this month to the current date, and the option should be in green and bold type.
    * When the dates are customized (do not fall into the aforementioned condition) then highlight all the custom dates.
    * To cancel, click anywhere outside the period card component or click the close icon. No state should changed.
    * When button Apply is clicked, then the selected dates are highlighted and the shown period should reflect the selected dates.
    * Minimum time range is 1 day
    * Maximum time range is 6 months
    * Today's date and future dates can not be selected
    
    Current Conditions:
    ![image](https://user-images.githubusercontent.com/53457819/114290280-c4b03e80-9aa8-11eb-9cde-41e0cddc6343.png)

    * The Functionality is same but the behavior isn't
    * Yesterday, Last 7 Days, Last 30 days, This Month Options can be clicked and the user will get the expected behavior but the option not in green color and bold type (after clicked)
    * There is no apply and cancel, i used auto apply mode so when the user click 2 dates it will automatically applied and when the user click outside the panel the selection event will be cancelled
    * Others, should be having expected behavior
2. Visualized Data same as the mock up
    * Has 2 different type of chart and has 4 type of label
    * Didn't expect realtime visualization but nice to have
    
    Current Conditions:
    ![image](https://user-images.githubusercontent.com/53457819/114290299-f1fcec80-9aa8-11eb-8b6e-7b9465e64682.png)
    ![image](https://user-images.githubusercontent.com/53457819/114290314-fde8ae80-9aa8-11eb-97d4-b827549ad192.png)
    ![image](https://user-images.githubusercontent.com/53457819/114290379-7a7b8d00-9aa9-11eb-8d6b-a4a2df6b81b4.png)

    * Chart visualization is different than the mockup it doesnt have 2 different types of chart on 1 canvas, but i replaced this with a toggle switch mode, this switch can toggle the chart view mode `line` and `bar` mode. When the user select 20 dates the chart will set to be `line` mode. and when user select more than 30 dates the toggle disabled and chart will set to be `line` mode, When user select `Yesterday` or `Today` options the chart automatically set to be `bar` mode and also the toggle will be disabled.
    * Actually i dont know what information i have to draw on the chart, and i dont know how to get expected information such as, `gross`, `netto`, `AVP`, `UPT` so i used the version of mine, hope that could replace the expected information :).
3. Data Summary
    * Didn't specify anything

    Current Conditions:
    ![image](https://user-images.githubusercontent.com/53457819/114290445-07bee180-9aaa-11eb-8cf5-5d6e27b0c1f9.png)

    * i assuming that Sales Turnover = Total Revnue (price - prod) `This value is realtime, changing by the date selected change`
    * Percentage value is just a random value
 4. Board Item List
    * Create mock up data
    
    Current Condition:
    ![image](https://user-images.githubusercontent.com/53457819/114290482-46549c00-9aaa-11eb-93df-e4b19485ea0c.png)

    * I have implemented data seeder for these 2 board `@/utils/productSelling.js`

     ```
        const soldProductGenerator = () => {
          let prod = [...soldProductData];
          prod = [...prod.map(el => {
            const totalSold = Math.floor(Math.random() * Math.pow(10, el.multiplier));
            const newEl = {...el};
            newEl.totalSold = totalSold;
            newEl.totalRevenue = totalSold * (newEl.price - newEl.prod);
            return newEl;
          })]
          return prod;
        }
     ```
     
     and
     
     ```
     const competitorProductGenerator = () => {
        let prod = [...competitorProductData];
        prod = [...prod.map(el => {
          const totalSold = Math.floor(Math.random() * Math.pow(10, el.multiplier));
          const newEl = {...el};
          newEl.totalSold = totalSold;
          newEl.totalRevenue = totalSold * newEl.price;
          return newEl;
        })]
        return prod;
      }
     ```
     
     this is the usage `@/views/dashboard @computedSoldData` I used momentJS to handle all computational section with dates
     
     ```
         for (let m = moment(startDate); m.diff(endDate, 'days') <= 0; m.add(1, 'days')) {
            const key = m.format('DD-MM-YYYY');
            this.chartLabel.push(key);
            let data = this.productSoldDataMap.get(key);
            if (data == null) {
              data = soldProductGenerator();
              this.productSoldDataMap.set(key, data);
            }
            this.chartDatasets.push(data);
            if (sumSoldData.length == 0) {
              sumSoldData = JSON.parse(JSON.stringify(data)); // deepcpy
            }
            else {
              for(let i = 0; i < sumSoldData.length; i++) {
                sumSoldData[i].totalSold += data[i].totalSold;
                sumSoldData[i].totalRevenue += data[i].totalRevenue;
              }
            }
          }
     ```
     
     So I used map to map all data by its date `key = date, val = data` , if the date doesn't have data then i used the generator to generate the data
     
 ### That's It, All Done, Hope u Enjoy :) Try to click random things, i have implemented some fun behavior for the click event :D
 ### Feel free to reach me if you have something in your mind
