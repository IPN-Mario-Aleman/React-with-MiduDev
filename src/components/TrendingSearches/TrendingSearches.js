import React, { useEffect, useState } from "react";
import getTrendingTerms from "services/getTrendingTermService";
import Category from "components/Category";

export default function TrendingSearches (){
    const [trends, setTrends] = useState([])
    
    useEffect(function () {
        const controller = new AbortController()
        getTrendingTerms({signal: controller.signal})
          .then(setTrends)
          .catch(err => {})
      
        return () => controller.abort()
      }, [])
    
    return <Category name='Tendencias' options={trends} />
}