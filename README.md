# Saskatoon Living Wage Calculator
This simple app lets you calculate and compare your wage (business or individual)  with that of the city of Saskatoon using data from https://www.livingwageyxe.ca/resources. It's possible to extend the app to support multiple cities. Additionally, the app can be duplicated for other cities in the country.


## How to modify 
Wageapp uses a JSON file containing the city data to do calculations. This file can be modified and updated with new data as needed.

- Fork the repo.
- Edit the information in the JSON file `wage.json`. Here is an example:

```json
{
  "sk": {
    "province": "Saskatchewan",
    "city": [
      {
        "id": "saskatoon",
        "name": "Saskatoon",
        "hourly_wage": 16.77,
        "items": [
          {
            "id": "food",
            "title": "Food",
            "chart_title": "Food",
            "tooltip": "Food expenses for Saskatoon are obtained from a 2012 study of food costs by the Public Health Nutritionists of Saskatchewan (PHNS 2012). The report estimates the monthly costs of eating healthily for a boy and a girl between the ages of 4 and 8 to be $162.70 and $157.19, respectively, and for a man and woman between the ages of 31 and 50 to be $264.54 and $224.02. These costs were adjusted to 2014 prices using the food component of the Saskatchewan consumer price index (CPI) (Statistics Canada 2015b). <br><br>Finally, the amount is adjusted upward by 5% in order to take into account the cost of miscellaneous foods such as coffee, tea, condiments, seasoning, spices and cooking materials such as baking powder, as recommended by Health Canada and followed in the Market Basket Measure (MBM) (Hatfield, Pyoer, and Gustajtis 2010:14).",
            "monthly_budget": 866.99
          },
          {
            "id": "clothing",
            "title": "Clothing",
            "chart_title": "Cloth",
            "tooltip": "Clothing expenses are obtained from the clothing component of the MBM, and are the same for all regions of Saskatchewan (Statistics Canada 2015a). The most current estimate of the cost of clothing in Saskatoon is for 2011. We divide this by 12 to get a monthly expense estimate. In order to estimate the expense for 2014, we adjust it by the change in the clothing component of the CPI for Saskatchewan between 2011 and 2014 (Statistics Canada 2015b).",
            "monthly_budget": 180.28
          },
          {
            "id": "shelter",
            "title": "Shelter",
            "chart_title": "Shelter",
            "tooltip": "Shelter expenses are derived from the affordable housing numbers provided by the CMHC (Canada Mortgage and Housing Corporation) (2014) and from Government estimates of electricity and homeowners insurance costs (Saskatchewan 2014). According to the CMHC the median monthly cost of renting a three bedroom apartment in Saskatoon in 2014 was $1,100. It is assumed that these rental rates include utilities except electricity. The Government of Saskatchewan estimates that the annual cost of electricity for a family earning $50,000 a year is $1,091. <br><br>In addition, basic tenant’s insurance in Saskatchewan costs $222 per year (Gingrich 2014). this is the cost of the Saskatchewan Government Insurance Tenant Pak which includes ten lost causes and damages and $25,000 theft coverage. The costs of electricity and homeowners insurance are annual estimates and need to be divided by 12 to get monthly costs.",
            "monthly_budget": 1209.42
          },
          {
            "id": "transport",
            "title": "Transportation",
            "chart_title": "Transport",
            "tooltip": "A family of four in Saskatchewan needs more than just one means of transportation. The inadequacy of public transit makes it impractical for a family to rely on. Transportation expenses are calculated based on the cost of owning and operating a used car and paying for one monthly transit pass. <br><br>Statistics Canada estimates the cost of owning and operating a used vehicle in Saskatchewan to be $4,904 in 2011 (the amount is used to estimate the transportation component of the MBM in rural communities) (Statistics Canada 2015a). In order to estimate the expense for 2014, we adjust it by the change in the transportation component of the CPI for Saskatchewan between 2011 and 2014 (Statistics Canada 2015b). <br><br>Additionally, the cost of a one-year Saskatoon Transit adult pass is $891 (Saskatoon Transit 2015). Both costs are divided by 12 in order get monthly cost estimates.",
            "monthly_budget": 493.40
          },
          {
            "id": "child_care",
            "title": "Child Care",
            "chart_title": "Child",
            "tooltip": "Child care expenses are among the most difficult to calculate. Godaycare.com calculates average child care costs for Saskatchewan based on data submitted to their site by users. Godaycare.com cost estimates align, roughly, with the lower bound of the estimates produced for Saskatoon by Macdonald and Friendly (2014). Macdonald and Friendly (2014) did not estimate costs for school age children. <br><br>According to Godaycare.com the average cost of full-time childcare for a preschool age child in Saskatchewan in 2014 was $596 per month. This number is multiplied by 12 to calculate its annual cost. The average cost of full-time childcare for a school age child in Saskatchewan in 2014 was $520 per month. The child is enrolled full time during summer vacation (2 months) and before and after school during the school year (10 months). The school age full time rate was adjusted downward to the same extent as the Saskatchewan Child Care Subsidy is for school age children in July and August (275/385 = 71%) (CCSO 2014).",
            "monthly_budget": 1078.33
          },
          {
            "id": "health_care",
            "title": "Health Care",
            "chart_title": "Health",
            "tooltip": "We used the Saskatchewan Blue Cross’ online rate calculator (2014) to calculate the cost of extended health benefits for our family in Saskatchewan in 2014. The core premium for the family costs $28.60 monthly. We assume that the family will also require extended coverage for prescription drugs, dental, hospital cash, and critical conditions up to $25,000. This brings the total estimated monthly premium up to $141.85.",
            "monthly_budget": 141.85
          },
          {
            "id": "education",
            "title": "Advanced Education",
            "chart_title": "Education",
            "tooltip": "We assume that each parent will attend one advanced education class in 2014 to upgrade their credentials and improve their career options. Costs of these classes vary widely in Saskatoon and throughout the province. We follow the lead of Gingrich (2014) and estimate the rough cost of tuition to be $500 and course materials, $100. This estimate is based on SIAST costs in 2012. A university class, say at the University of Saskatchewan, would cost much more.",
            "monthly_budget": 100.00
          },
          {
            "id": "c_fund",
            "title": "Contingency Fund",
            "chart_title": "Cont.Fund",
            "tooltip": "Finally, an amount equal to two week’s pay for each parent is set aside for the expense of contingency fund.",
            "monthly_budget": 195.65
          },
          {
            "id": "other",
            "title": "Other",
            "chart_title": "Other",
            "tooltip": "The household and other expenses are obtained from the “Other” category in the MBM for 2011 (Statistics Canada 2015a) and adjusted upward using the average of the “Household operations and furnishings” and “Recreation, education and reading” components of the CPI to estimate its cost in 2014 (Statistics Canada 2015b). In 2011, the the MBM other component ascribed to Saskatoon was $9,386. We divide this by 12 to get monthly expenses.",
            "monthly_budget": 798.81
          }
        ]
      }
    ]
  }
}
```

## Contributing to the project
You can help improve the project by adding additional features, checking out for bugs, helping in bug fixes and enhancement.

<strong>NB:</strong> This is a rough two days work and will need to be cleaned for production-ready apps.

Thanks!


## Licence
```MIT License

Copyright (c) [2018] tbenjis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
