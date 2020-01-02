import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, search: string, ): any {
  //   if (value.length === 0 || filterString === '') {
  //     return value;
  //   }
  //   const resultArray = [];

  //   for(const add of value) {
  //     if (add === filterString) {
  //       resultArray.push(add)
  //     }
  //   }
  //   return resultArray;
  // }
  //working
//   if (!search) {
//     return value
//   }
//   let solution = value.filter(v =>{
//     if (!v) {
//       return;
//     }
//     return v.toLowerCase().indexOf(search.toLowerCase()) !== -1;
//   })
//   return solution;
  

// }
//net ninja solution modified
  if (!search) {
    return value
  }
  let solution = value.filter(v =>{
    if (!v) {
      return;
    }
    // console.log(v)
    return v.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    // return v.toLowerCase().includes(search)


  })
  // console.log(solution)

  return solution;

}
}
