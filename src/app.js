import { LightningElement,track } from "lwc";
import childAddhtml from './childAdd.html'

const columns = [
    { label: 'Address Type', fieldName: 'addressType' },
    { label: 'Default', fieldName: 'default' },
    { label: 'Group No', fieldName: 'groupNo' },
    { label: 'Address', fieldName: 'address'},
];

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";

  
  @track selectedAddressType;
  
  value = '';

  get options() {
      return [
          { label: 'Search Address', value: 'option1' },
          { label: 'Custom Address', value: 'option2' },
          { label: 'Existing Address', value: 'option3' },
      ];
  }
  
  data = [];
  columns = columns;
  rowOffset = 0;

  showFeatures = true;

  @track isShowNCNGModal = false;
  @track isShowNCEGModal = false;

  showNCNGModal() {
    this.isShowNCNGModal = true;
  }

  hideNCNGModal() {
    this.isShowNCNGModal = false;
  }

  showNCEGModal() {
    this.isShowNCEGModal = true;
  }

  hideNCEGModal() {
    this.isShowNCEGModal = false;
  }

  handleChangeAddress(event) {
       window.console.log('selected value ===> '+event.target.value);
       this.selectedAddressType = event.target.value;

    }

}
