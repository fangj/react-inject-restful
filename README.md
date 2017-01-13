# react-inject-restful
inject restful api or data as props to react component

code from https://github.com/facebook/react/issues/5465#issuecomment-157888325

### Feature

```
injectApi 
<Component /> => <Component api/>

injectValue
<Component /> => <Component value />

injectValueApi
<Component /> => <Component value api/>
```


### How to use

```

import {injectApi ,injectValue ,injectValueApi } from 'react-inject-restful'

//inject Api
Component=injectApi(url)(Component)

//inject Value
Component=injectValue(url)(Component)

//inject Value and api 
Component=injectValueApi(url)(Component)

//inject api with customize name
Component=injectApi(url,{api:"api_prop_name",value:"value_prop_name"})

```
