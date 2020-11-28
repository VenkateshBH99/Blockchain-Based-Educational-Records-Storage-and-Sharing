pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract EducationContract {
  struct RecordDetails {
        string record_id;
        string record_name;
        string description;
        string timestamp;
        string ipfsHash;
    }

    RecordDetails[] public record;
    mapping(address => RecordDetails[]) public students;

    function addReport(string memory _record_id,address _student, string memory _record_name, string memory _description, string memory _timestamp, string memory _ipfsHash) public returns(uint) {

        students[_student].push(RecordDetails(_record_id,_record_name,_description,_timestamp,_ipfsHash));
        return 1;
    }

    //function getPatCount() public view returns(uint) {
    //    return record.length;
    //}


    function getAllrecordDetails(address _id) public view returns (RecordDetails[] memory)
    {
        RecordDetails[] memory id = new RecordDetails[](students[_id].length);
        for (uint i = 0; i < students[_id].length; i++) {
            RecordDetails storage temprecord = students[_id][i];
            id[i] = temprecord;
        }
        return id;
    }

    //function getPat(uint index) public view returns (uint, string memory, string memory,string memory, string memory)
  //  {
    //    return (record[index].record_id, record[index].record_name, record[index].description, record[index].timestamp, record[index].ipfsHash);
  //  }

    // function getPat2(uint index) public view returns(string memory, uint, string memory, string memory)
    // {
    //     return (record[index].par_rem, record[index].fee, record[index].message, record[index].ipfsHash);
    // }
}
