const SEARCH_FIELD = '[name="q"]';
const RESULT_CONTAINER = '//*[@id="center_col"]';

class SearchPage {
  static search(keyword: any) {
    cy.get(SEARCH_FIELD).type(keyword).type("{enter}");
  }
}

export default SearchPage;
